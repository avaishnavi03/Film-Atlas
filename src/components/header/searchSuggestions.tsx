import { useEffect, useState, useRef } from "react";
import axiosInstance from "../../services/axiosInstance";
import { useNavigate, useLocation } from "react-router-dom";

function SearchSuggestions({ query, clear }: any) {
    const [results, setResults] = useState<any[]>([]);
    const navigate = useNavigate();
    const location = useLocation();
    const boxRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
        function handleClickOutside(event:any) {
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                setResults([]);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        
    }, []);

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        async function fetchData() {
            try {
                const movieRes = await axiosInstance.get(
                    `/search/movie?query=${encodeURIComponent(query)}`
                );

                const tvRes = await axiosInstance.get(
                    `/search/tv?query=${encodeURIComponent(query)}`
                );

                const movieList = movieRes.data.results.map((m: any) => ({
                    id: m.id,
                    name: m.title,
                    type: "movie",
                }));

                const tvList = tvRes.data.results.map((t: any) => ({
                    id: t.id,
                    name: t.name,
                    type: "tv",
                }));

                setResults([...movieList, ...tvList].slice(0, 6));
            } catch (error) {

                console.log("Error fetching search");
            }
        }

        fetchData();

    }, [query]);

    if (
        location.pathname === "/search" ||
        !query ||
        results.length === 0
    ) return null;

    return (
        <div ref={boxRef} className="suggestions-box">
            {results.map((item: any) => (
                <p
                    key={item.id}
                    className="suggestion-item"
                    onClick={() => {
                        navigate(`/${item.type}/${item.id}`);
                        clear();
                        setResults([]);
                    }}
                >
                    {item.name} ({item.type})
                </p>
            ))}
        </div>
    );
}

export default SearchSuggestions;