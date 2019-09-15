import React, { useState, useEffect } from 'react'
import ColorItem from './ColorItem'
import {connect} from 'react-redux'

const ColorListModal = () => {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getColors();
    //eslint-disable-next-line
  }, []);

  const getColors = async () => {
    setLoading(true);
    const res = await fetch('/colors');
    const data = await res.json();

    setColors(data);
    setLoading(false);
  }
  return (
    <div id="color-list-modal" className="modal">
      <div className="modal-content">
        <h4>Colors List</h4>
        <ul className="collection">
          {!loading && colors.map(color => (
            <ColorItem color={color} key={color.id}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ColorListModal;
