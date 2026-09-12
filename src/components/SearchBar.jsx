import { useEffect, useRef } from "react"

export default function SearchBar({ searchTerm, setSearchTerm }) {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="🔍 Cerca un film"
                value={searchTerm}
                onChange={setSearchTerm}
                className="search-bar"
            />
        </div>
    )
}