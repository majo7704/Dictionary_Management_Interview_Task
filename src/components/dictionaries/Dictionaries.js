import React, { useEffect } from 'react'
import Preloader from '../layout/Preloader'
import DictionaryItem from './DictionaryItem'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getDictionaries} from '../../actions/dictionaryActions'

const Dictionaries = ({dictionary:{dictionaries, loading}, getDictionaries}) => {
  
  useEffect(() => {
    getDictionaries();
    //eslint-disable-next-line
  }, []);
  

  if (loading || dictionaries === null ) {
    return <Preloader/>
  }
  
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Dictionaries</h4>
      </li>
      {!loading && dictionaries.length === 0 ? (<p className="center">No dictionaries to show...</p>) :
        <div>
          {(dictionaries.map(dictionary => <DictionaryItem dictionary={dictionary} key={dictionary.id}/>))}
        </div>
      }
    </ul>
  )
}
Dictionaries.propTypes = {
  dictionary: PropTypes.object.isRequired,
  getDictionaries:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  dictionary: state.dictionary
  //dictionary: state.dictionary.dictionaries
  //loading: state.dictionary.loading
})

export default connect(mapStateToProps, {getDictionaries}) (Dictionaries)
