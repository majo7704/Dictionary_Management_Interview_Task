import React, { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar'
import Dictionaries from './components/dictionaries/Dictionaries'
import AddDictionaryModal from './components/dictionaries/AddDictionaryModal'
import EditDictionaryModal from './components/dictionaries/EditDictionaryModal'
import AddColorModal from './components/colors/AddColorModal'
import ColorListModal from './components/colors/ColorListModal'
import AddBtn from './components/layout/AddBtn'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
  })
  return (
    <Provider store={store}>
    <>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddColorModal />
        <ColorListModal/>
        <AddDictionaryModal />
        <EditDictionaryModal/>
        <Dictionaries />
      </div>
      </>  
    </Provider>
  );
}

export default App;
