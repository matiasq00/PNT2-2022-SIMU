import { useState } from "react";
import { Link } from "react-router-dom";

const Pelicula = (props) => {
  return (
    <li>
      <div>
        <Link to={`/peliculas/${props.Id}`}>
          <div>
            <img src={props.Imagen} />
          </div>
          <div>
            <h2>{props.Titulo}</h2>
            <h3>{props.Plot}</h3>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default Pelicula;
