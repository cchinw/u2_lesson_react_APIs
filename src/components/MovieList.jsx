import { POSTER_PATH } from "../globals"
import MovieDetails from "./MovieDetails"

const MovieList = ({movies, handleClick, selectedMovie}) => {




  return (
    <div className='grid'>
      {
        movies.map((movie)=>(
          <div key={movie.id} className="card">
            <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt='poster'></img>
            <h3>{movie.title}</h3>
            <button onClick={(()=> handleClick(movie.id))}>View Movie</button>
          </div>
        ))
      }
    </div>
  )
}

export default MovieList