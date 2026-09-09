import MovieCard from "./MovieCard";

export default function MovieList({ onToggleFavorite, filteredMovies }) {
  return (
    <>
      {filteredMovies.map((item) => (
        <MovieCard
          key={item.id}
          id={item.id}
          title={item.title}
          year={item.year}
          poster={item.poster}
          genre={item.genre}
          watched={item.watched}
          favorite={item.favorite}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </>
  );
}
