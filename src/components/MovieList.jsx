import '../data/movies'
import MovieCard from './MovieCard'

export default function MovieList({ movies }) {
    return (
        {movies.map((movie) => {
            <MovieCard title={movie.title} year={movie.year} poster={movie.poster} genre={movie.genre} />
        })}
    )
}