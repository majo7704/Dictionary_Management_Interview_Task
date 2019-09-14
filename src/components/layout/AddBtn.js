import React from 'react'

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a className="btn-floating btn-large blue darken-2 modal-trigger" href="#add-dictionary-modal">
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a href="#color-list-modal" className="btn-floating green modal-trigger"><i className="material-icons">subject</i>
          </a>
        </li>
        <li>
          <a href="#add-color-modal" className="btn-floating red modal-trigger"><i className="material-icons">note_add</i>
          </a>
        </li>
      </ul>
    </div>

  )
}

export default AddBtn
