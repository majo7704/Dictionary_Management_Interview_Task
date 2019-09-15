import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'
import {deleteDictionary, setCurrent} from '../../actions/dictionaryActions'

const DictionaryItem = ({ dictionary, deleteDictionary, setCurrent }) => {
  const onDelete = () => {
    deleteDictionary(dictionary.id);
    M.toast({html: 'Dictionary deleted'})
  }
  return (
    <li className=" row collection-item">
        <div className="col s4">
          <a href="#edit-dictionary-modal" className= {`modal-trigger ${dictionary.validated ? 'blue-text' : 'red-text'}`} onClick={()=> setCurrent(dictionary)}>{dictionary.name}</a>
        </div>
        <div className="col s4">
        <span className="grey-text">
            {/* <span className="black-text">{dictionary.color}</span>*/} Validated: {dictionary.validated ? <i className="material-icons blue-text"> check_box</i> : <i className="material-icons red-text"> indeterminate_check_box </i>}
          {/* <span className="black-text">{dictionary.price}</span> */}
        </span>
        </div>
        <div className="col s4">
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
          </a>
        </div>
    </li>
  )
}

DictionaryItem.propTypes = {
  dictionary: PropTypes.object.isRequired,
  deleteDictionary: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
}

export default connect(null, {deleteDictionary, setCurrent}) (DictionaryItem)
