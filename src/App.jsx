import Container from "./components/Container"
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar.jsx";

import './App.css';
import { movies as initialMovies } from "./data/movies.js";
import { useState } from "react";
import Counter from "./components/Counter.jsx";

function App() {
  const [movies, setMovies] = useState(initialMovies);

  function handleTogglefavorite(id) {
    setMovies((prevMovies) => prevMovies.map((movie) =>
      movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
    ))
  }

  const [searchTerm, setSearchTerm] = useState('');
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const countFavorite = movies.reduce((totPref, movie) => {
    if (movie.favorite === true) {
      totPref += 1;
    } else {
      totPref += 0;
    }

    return totPref;
  }, 0);

  return (
    <>
      <div className='flex'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={handleChange} />
        <Counter countFavorite={countFavorite} />
      </div>
      <Container>
        <MovieList onToggleFavorite={handleTogglefavorite} filteredMovies={filteredMovies} />
      </Container>
    </>
  )
}

export default App
