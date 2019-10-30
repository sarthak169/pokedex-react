import React from 'react';
import './detailView.css';
// import sprite from './sprites.png'
const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type } = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite" />
      <div className='data-wrapper'>
        <h3 className='data-name'>ID: {id}</h3>
        <h3 className='data-name'>Name:{name}</h3>
        <h3 className="data-name">Type: {type}</h3>
      </div>
    </section>
  )
}

export default DetailView;