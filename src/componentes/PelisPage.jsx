import Peliculas from './Peliculas'
import { useState, useEffect } from 'react'

const PelisPage = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:4000/api/movies?pageSize=2&page=2')
        .then(response => response.json())
        .then(data=> {
            setMovies(data);
        })
        .catch(error => console.log(error));
    }, []);

  return(
    <div>
        <Peliculas Movies = {movies} />
    </div>
  )

    

    
}
export default PelisPage;