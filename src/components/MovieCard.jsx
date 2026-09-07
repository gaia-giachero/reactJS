export default function MovieCard({ title, year, poster }) {
    return (
        <>
            <article className="card">
                <img src={poster} alt="..." width={200} height={300} />
                <div className="info">
                    <h3>{title}</h3>
                    <div className="altro">
                        <p>{year}</p>
                        <button className="btn">👀</button>
                    </div>
                </div>
            </article>
        </>
    )
}