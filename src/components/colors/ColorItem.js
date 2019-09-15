import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { deleteColor } from '../../actions/colorActions'
import M from 'materialize-css/dist/js/materialize.min.js';

const ColorItem = ({ color: { id, range, domain }, deleteColor }) => {
  const onDelete = () => {
    deleteColor(id);
    M.toast({ html: 'Range and domain deleted' })
  }
  return (
    <li className="collection-item">
      <div>
        {range} - {domain}
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

ColorItem.propTypes = {
  color: PropTypes.object.isRequired,
  deleteColor: PropTypes.func.isRequired,
}

export default connect(null, {deleteColor}) (ColorItem)
