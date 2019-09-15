import React, { useState, useEffect } from 'react'
import ColorSelectOptions from '../colors/ColorSelectOptions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js';
import {updateDictionary} from '../../actions/dictionaryActions'

const EditDictionaryModal = ({current, updateDictionary}) => {
  const [name, setName] = useState('');
  const [validated, setValidated] = useState();
  const [color, setColor] = useState('')
  const [price, setPrice] = useState('')
  const [colors, setColors] = useState('')
  useEffect(() => {
    if (current) {
      setName(current.name);
      setColor(current.color);
      setPrice(current.price);
      setValidated(current.validated)
  }
}, [current])
  const onSubmit = () => {
    if (name === '' || color === '') {
      M.toast({ html: 'Please edit name, color or price' })
    } else {
      const updDictionary = {
        id: current.id,
        name,
        color,
        price,
        validated
      }
      updateDictionary(updDictionary);
      M.toast({html: `Dictionary ${name} was updated`})
      //Clear Fields
      setName('');
      setColor('');
      setPrice('');
      setValidated(false)
    }
  }
  // const handleChange = (e, id) => {
  //   const match = colors.find(color => color.id === id);
  //   if (e.target.id === 'domain') match.domain = e.target.value;
  //   if (e.target.id === 'range') match.range = e.target.value;
  //   setColors({ colors: [...colors] })
  // }
  return (
    <div id='edit-dictionary-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit dictionary</h4>
        <div className='row'>
          <div className="input-field">
            <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select name="color" value={color} className="browser-default" onChange={e => setColor(e.target.value)}>
              <option value="" disabled>Select Color</option>
              <ColorSelectOptions />
              {/* <option value="Dark Grey">Dark Grey</option>
              <option value="Black">Black</option>
              <option value="Silver">Silver</option>
              <option value="White">White</option>
              <option value="Turquoise">Turquoise</option> */}
            </select>
          </div>
        </div>
        <div className='row'>
          <div className="input-field">
            <input type="number" name='price' value={price} onChange={e => setPrice(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input type="checkbox" className="filled-in" checked={validated} value={validated} onChange={e => setValidated(!validated)} />
                <span>Validated</span>
              </label>
            </p>
        </div>
        </div>
      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light blue btn">Enter</a>
      </div>
      </div>
    </div>
  )
}
const modalStyle = {
  width: '75%',
  height: '75%'
}
EditDictionaryModal.propTypes = {
  current: PropTypes.object,
  updateDictionary: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  current: state.dictionary.current
})
export default connect(mapStateToProps, {updateDictionary}) (EditDictionaryModal)
