import React from 'react'
import PropTypes from 'prop-types'

const DictionaryItem = ({ dictionary }) => {
  return (
    <li className="collection-item">
      <div className="row">
        <div className="col s4">
          <a href="#edit-dictionary-modal" className={`modal-trigger ${dictionary.validated ? 'blue-text' : 'red-text'}`}>{dictionary.name}</a>
          
        </div>
        
        <div className="col s4">
        <span className="grey-text">
            {/* <span className="black-text">{dictionary.color}</span>*/} Validated: {dictionary.validated ? <i className="material-icons blue-text"> check_box</i> : <i className="material-icons red-text"> indeterminate_check_box </i>}
          {/* <span className="black-text">{dictionary.price}</span> */}
        </span>
        </div>
        <div className="col s4">
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
          </a>
        </div>
      </div>
    </li>
  )
}

DictionaryItem.propTypes = {
  dictionary:PropTypes.object.isRequired
}

export default DictionaryItem
