import React, {useRef} from 'react'
import { connect } from 'react-redux'//connects redux
import PropTypes from 'prop-types'
import {searchDictionaries} from '../../actions/dictionaryActions'

const SearchBar = ({ searchDictionaries }) => {
  const text = useRef('')
  const onChange = e => {
    searchDictionaries(text.current.value.toLowerCase())
  }
  return (
    <nav className="nav-extended" style={{marginButtom: '30px'}} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" placeholder='Search dictionaries..' ref={text} onChange={onChange} required/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
        </div>
      </form>
      </div>
      <div className="row">
        <div className="col s12">
          <ul className="tabs tabs-fixed-width tabs-s-demo z-depth-0" >
            <li className="tab col s3"><a className="active" href="#dictionaries-list">Dictionaries</a></li>
            <li className="tab col s3"><a href="#test2">Validation tests</a></li>
            <li className="tab col s3"><a href="#test4">Test 4</a></li>
          </ul>
        </div>
        <div id="test1" className="col s12">Test 1</div>
        <div id="test2" className="col s12">Test 2</div>
        <div id="test4" className="col s12">Test 4</div>
      </div>
    </nav>
    
  )
}

SearchBar.propTypes = {
  searchDictionaries: PropTypes.func.isRequired
}
export default connect(null, {searchDictionaries} ) (SearchBar) //nothing to get from state but there is action to call searchDictionaries
