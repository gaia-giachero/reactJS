import MovieCard from "./MovieCard";

export default function MovieList({ items }) {
  return (
    <>
      {items.map((item) => (
        <MovieCard
          key={item.id}
          title={item.title}
          year={item.year}
          poster={item.poster}
          genre={item.genre}
          watched={item.watched}
        />
      ))}
    </>
  );
}
