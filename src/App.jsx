import Container from "./components/Container"
import MovieList from "./components/MovieList";

import './App.css';
import { movies } from "./data/movies.js";

function App() {

  return (
    <>
      <Container>
        <MovieList items={movies} />
      </Container>
    </>
  )
}

export default App
