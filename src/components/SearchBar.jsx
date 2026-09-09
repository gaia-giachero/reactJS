export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div>
            <input
                type="text"
                placeholder="🔍 Cerca un film"
                value={searchTerm}
                onChange={setSearchTerm}
                className="search-bar"
            />
        </div>
    )
}