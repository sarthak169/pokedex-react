import React from 'react';
import sprites from './sprites.png'
import './pokecell.css'


const PokeCell = ({ pokeClass, handleOnClick }) => {
  const { id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

  return <button onClick={() => handleOnClick(id)} style={style} className="poke-cell"></button>
};

export default PokeCell;