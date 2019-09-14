import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const EditDictionaryModal = () => {
  const [name, setName] = useState('');
  const [validated, setValidated] = useState(false);
  const [range, setRange] = useState('')
  const [domain, setDomain] = useState('')
  const [colors, setColors] = useState('')

  const onSubmit = () => {
    if (name === '' || range === '' || domain === '') {
      M.toast({ html: 'Please enter name then choose range and domain' })
    } else {
      console.log(name, range, domain, validated)
      //Clear Fields
      setName('');
      setRange('');
      setDomain('');
      setValidated(false)
    }
  }
  const handleChange = (e, id) => {
    const match = colors.find(color => color.id === id);
    if (e.target.id === 'domain') match.domain = e.target.value;
    if (e.target.id === 'range') match.range = e.target.value;
    setColors({ colors: [...colors] })
  }
  return (
    <div id='edit-dictionary-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit dictionary</h4>
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
            <select name="range" value={range} className="browser-default" onChange={e => setRange(e.target.value)}>
              <option value="" disabled>Select Range</option>
              <option value="Dark Grey">Dark Grey</option>
              <option value="Black">Black</option>
              <option value="Silver">Silver</option>
              <option value="White">White</option>
              <option value="Turquoise">Turquoise</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select name="domain" value={domain} className="browser-default" onChange={e => setDomain(e.target.value)}>
              <option value="" disabled>Select Domain</option>
              <option value="Stonegrey">Stonegrey</option>
              <option value="Midnight Blackk">Midnight Black</option>
              <option value="Silver">Mystic Silver</option>
              <option value="Mystic White">Mystic White</option>
              <option value="Caribbean Sea">Caribbean Sea</option>
            </select>
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
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light blue btn">Enter</a>
      </div>
    </div>
  )
}
const modalStyle = {
  width: '75%',
  height: '75%'
}
export default EditDictionaryModal
