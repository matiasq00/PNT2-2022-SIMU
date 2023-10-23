import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const PeliculaDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null); // Inicializa con null

  useEffect(() => {
    fetch("http://localhost:4000/api/movies?pageSize=2&page=2")
      .then((response) => response.json())
      .then((data) => {
        const selectedMovie = data.find((movie) => movie._id === id);
        if (selectedMovie) {
          setMovie(selectedMovie);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!movie) {
    return <p>La película no se encuentra o el ID es inválido.</p>;
  }

  return (
    <div>
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Plot: {movie.plot}</p>
    </div>
  );
};

export default PeliculaDetails;
