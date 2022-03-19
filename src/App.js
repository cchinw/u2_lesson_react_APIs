import './styles/App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'

const App = () => {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null) // this should be a movie once you select one

  const API_KEY = process.env.REACT_APP_TMDB_KEY

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}`
      )
      console.log(response)
      setMovies(response.data.results)
    }
    getMovies()
  }, [])

  const handleClick = (id) => {
    setSelectedMovie(id)
  }

  const renderDetail = () => {
    if (selectedMovie) {
      return (
        <div>
          <MovieDetails
            selectedMovie={selectedMovie}
            handleClick={handleClick}
          />
        </div>
      )
    }
  }

  // let render = selectedMovie && <MovieDetails selectedMovie={selectedMovie} />

  return (
    <div>
      {selectedMovie && (
        <MovieDetails selectedMovie={selectedMovie} handleClick={handleClick} />
      )}
      <MovieList
        movies={movies}
        handleClick={handleClick}
        selectedMovie={selectedMovie}
      />
    </div>
  )
}

export default App
