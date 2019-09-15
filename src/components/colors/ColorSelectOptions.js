import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getColors} from '../../actions/colorActions'

const ColorSelectOptions = ({ getColors, color: { colors, loading } }) => {
  useEffect(() => {
    getColors();
    //eslint-disable-next-line
  }, []); //runs only when component mounts
  return (
    !loading && colors !== null && colors.map(c => <option key={c.id} value={`${c.range}${c.domain}`}>
      {c.range} - {c.domain}
    </option>)
  )
}

ColorSelectOptions.propTypes = {
  color: PropTypes.object.isRequired,
  getColor: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  color: state.color
})

export default connect (mapStateToProps, {getColors})(ColorSelectOptions)
