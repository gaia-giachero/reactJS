export default function MovieCard({ title, year, poster, genre, watched }) {
  return (
    <>
      <article className="card">
        <img src={poster} alt="..." width={200} height={300} />
        <div className="info">
          <h3>{title}</h3>
          <div className="altro">
            <p>{year} | {genre && genre}</p>
          </div>
          <p className="isWatched">
            {watched ? "✅ visto" : "👀 da vedere"}
          </p>
        </div>
      </article>
    </>
  );
}
