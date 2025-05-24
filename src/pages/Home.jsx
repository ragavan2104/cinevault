import React, { useEffect, useState, useContext } from "react";
import { WatchListContext } from "../context/WatchListContext";
import Moviecard from "../components/Moviecard";
import GenreFilter from "../components/GenreFilter";

const Home = () => {
    const { genreList } = useContext(WatchListContext);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=0f8288318000b406848476d98f116b36`;
                if(search) {
                    url = `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&api_key=0f8288318000b406848476d98f116b36`;
                }
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch movies');
                const data = await response.json();
                const results = data.results || [];
                setMovies(selectedGenre 
                    ? results.filter(movie => movie.genre_ids?.includes(Number(selectedGenre)))
                    : results
                );
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const timeoutId = setTimeout(fetchMovies, search ? 500 : 0);
        return () => clearTimeout(timeoutId);
    }, [page, search, selectedGenre]);

    return (
        <main className="min-h-screen pt-16 bg-gradient-to-b from-gray-900 to-black">
            <div className="fixed top-16 inset-x-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-4">
                    <input 
                        type="text" 
                        value={search}
                        placeholder="Search movies..." 
                        className="input-primary flex-1" 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <GenreFilter genreList={genreList} setSelectedGenre={setSelectedGenre} />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                {error ? (
                    <div className="text-red-500 text-center p-4 bg-red-900/20 rounded-lg">
                        {error}
                    </div>
                ) : loading ? (
                    <div className="text-center p-8">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {movies.map(movie => (
                                <Moviecard key={movie.id} movie={movie} />
                            ))}
                        </div>
                        
                        {movies.length === 0 && (
                            <div className="text-center p-8">
                                <p className="text-gray-400">No movies found</p>
                            </div>
                        )}

                        <div className="flex justify-center gap-4 my-8">
                            <button 
                                className="btn btn-secondary disabled:opacity-50"
                                onClick={() => setPage(p => Math.max(1, p - 1))}
                                disabled={page === 1 || loading}
                            >
                                Previous
                            </button>
                            <span className="flex items-center px-4 text-gray-400">
                                Page {page}
                            </span>
                            <button 
                                className="btn btn-secondary disabled:opacity-50"
                                onClick={() => setPage(p => p + 1)}
                                disabled={loading}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}

export default Home;