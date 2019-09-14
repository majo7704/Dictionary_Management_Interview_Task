import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const AddColorModal = () => {
  const [validated, setValidated] = useState(false);
  const [range, setRange] = useState('')
  const [domain, setDomain] = useState('')
  const [colors, setColors] = useState('')

  const onSubmit = () => {
    if (range === '' || domain === '') {
      M.toast({ html: 'Please enter a range and domain' })
    } else {
      console.log(range, domain)
      //Clear Fields
      setRange('');
      setDomain('');
    }
  }
  const handleChange = (e, id) => {
    const match = colors.find(color => color.id === id);
    if (e.target.id === 'domain') match.domain = e.target.value;
    if (e.target.id === 'range') match.range = e.target.value;
    setColors({ colors: [...colors] })
  }
  return (
    <div id='add-color-modal' className='modal'>
      <div className='modal-content'>
        <h4>New range/domain</h4>
        <div className='row'>
          <div className="input-field">
            <input type="text" name='range' value={range} onChange={e => setRange(e.target.value)} />
            <label htmlFor="range" className="active">
             Range
          </label>
          </div>
        </div>
        <div className='row'>
          <div className="input-field">
            <input type="text" name='domain' value={domain} onChange={e => setDomain(e.target.value)} />
            <label htmlFor="domain" className="active">
              Domain
          </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light blue btn">Enter</a>
      </div>
    </div>
  )
}

export default AddColorModal
