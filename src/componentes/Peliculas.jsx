import React, { useEffect, useState } from 'react';
import Pelicula from './Pelicula';
import PelisPage from './PelisPage';

export default function Peliculas(props) {

  return (
    
      <ul className='peliculas-list'>
        {props.Movies.map(pelicula => {
               return(
                <Pelicula
                Id = {pelicula._id}
                Titulo = {pelicula.title}
                Plot = {pelicula.fullplot}
                Imagen = {pelicula.poster}
                />
               );

        })}
          

      </ul>
   
  );
}

