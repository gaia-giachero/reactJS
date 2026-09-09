import Container from "./components/Container"
import MovieList from "./components/MovieList";

import './App.css';
import { movies as initialMovies } from "./data/movies.js";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(initialMovies);

  function handleTogglefavorite(id) {
    setMovies((prevMovies) => prevMovies.map((movie) => 
      movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
    ))
  }

  return (
    <>
      <Container>
        <MovieList items={movies} onToggleFavorite={handleTogglefavorite} />
      </Container>
    </>
  )
}

export default App
