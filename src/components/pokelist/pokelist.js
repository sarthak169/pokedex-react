import React from 'react';
import './pokelist.css';
import PokeCell from '../pokecell/pokecell'
import {pokeClasses} from '../pokeClasses'

const PokeList = ({ handleOnClick }) => {
  const cells = pokeClasses.map(pokeClass => {
    return (
      <PokeCell
        key={pokeClass.id}
        pokeClass={pokeClass}
        handleOnClick={handleOnClick}
      />
    );
  });


  return (
    <section className="poke-list">
      {cells}
    </section>
  )
}
export default PokeList;