import React from 'react'
import PropTypes from 'prop-types'

const ColorItem = ({color}) => {
  return (
    <li className="collection-item">
      <div>
        {color.range} - {color.domain}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

ColorItem.propTypes = {
  color:PropTypes.object.isRequired
}

export default ColorItem
