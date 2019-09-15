import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux'
import {addDictionary} from '../../actions/dictionaryActions'
import PropTypes from 'prop-types'


const AddDictionaryModal = ({addDictionary}) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('')
  const [price, setPrice] = useState('')
  const [validated, setValidated] = useState(false);
  
  const onSubmit = () => {
    if (name === '' || color === '') {
      M.toast({ html: 'Please enter name color & price' })
    } else {
      const newDictionary = {
        name,
        color,
        price,
        validated
      };
      addDictionary(newDictionary);

      M.toast({ html: `Dictionary added for ${color}` });
      //Clear Fields
      setName('');
      setColor('');
      setPrice('');
      setValidated(false)
    }
  }
  return (
    <div id='add-dictionary-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter dictionary name</h4>
        <div className='row'>
        <div className="input-field">
          <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} />
          <label htmlFor="name" className="active">
            Dictionary Name
          </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select name="color" value={color} className="browser-default" onChange={e => setColor(e.target.value) }>
              <option value="" disabled>Select Color</option>
              <option value="Dark Grey">Dark Grey</option>
              <option value="Black">Black</option>
              <option value="Silver">Silver</option>
              <option value="White">White</option>
              <option value="Turquoise">Turquoise</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className="input-field">
            <input type="number" name='price' value={price} onChange={e => setPrice(e.target.value)} />
            <label htmlFor="price" className="active">
              Enter Price CHF
          </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input type="checkbox" className="filled-in" checked={validated} value={validated} onChange={e => setValidated(!validated)}/>
                <span>Validated</span>
              </label>
            </p>
          </div>
        </div>
      <div className="modal-footer">
        <a href="#!"onClick={onSubmit} className="modal-close waves-effect waves-light blue btn">Enter</a>
      </div>
      </div>
    </div>
  )
}
AddDictionaryModal.propTypes = {
  addDictionary: PropTypes.func.isRequired
}

const modalStyle = {
  width: '75%',
  height: '75%'
}
export default connect(
  null,
  { addDictionary }
)(AddDictionaryModal)
