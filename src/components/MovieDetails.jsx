import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URL, POSTER_PATH } from "../globals"



const MovieDetails = (props) => {

const API_KEY = process.env.REACT_APP_TMDB_KEY

const [movieDetails, setMovieDetails] = useState(0)

useEffect(() => {
  const getMovieId = async () => {
    const response = await axios.get(
      `${BASE_URL}/movie/${props.selectedMovie}?api_key=${API_KEY}`
    )
    console.log(response)
    setMovieDetails(response.data)
  }
  getMovieId()
}, [props.selectedMovie])

  return (
    <div onClick={()=> props.handleClick(null)}>
      <h1>{movieDetails.title}</h1>
      <img src={`${POSTER_PATH}${movieDetails.backdrop_path}`} style={{width: '100vw'}} alt='poster'></img>
      <p style={{color: 'white'}}>{movieDetails.overview}</p>
    </div>
  )
}

export default MovieDetails