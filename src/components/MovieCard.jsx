export default function MovieCard({ id, title, year, poster, genre, watched, favorite, onToggleFavorite }) {
  return (
    <>
      <article className="card">
        <img src={poster} alt="..." width={200} height={300} />
        <div className="info">
          <h3>{title}</h3>
          <div className="altro">
            <p>{year} | {genre && genre}</p>
          </div>
          <div className="dettagli">
            <p className="isWatched">
              {watched ? "✅ visto" : "👀 da vedere"}
            </p>
            <button className={favorite ? 'btn-favorite' : 'btn'} onClick={() => onToggleFavorite(id)}><span>{favorite ? '⭐' : '★'}</span></button>
          </div>
        </div>
      </article>
    </>
  );
}
