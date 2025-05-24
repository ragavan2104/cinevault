import React, { useContext, useState } from 'react';
import { WatchListContext } from '../context/WatchListContext';
import Moviecard from '../components/Moviecard';
import GenreFilter from '../components/GenreFilter';
import { Link } from 'react-router-dom';

const WatchList = () => {
    const { watchList, genreList } = useContext(WatchListContext);
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState('');

    const filteredMovies = watchList.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
        const matchesGenre = !selectedGenre || movie.genre_ids.includes(Number(selectedGenre));
        return matchesSearch && matchesGenre;
    });

    return (
        <main className="min-h-screen pt-16 bg-gradient-to-b from-gray-900 to-black">
            <div className="fixed top-16 inset-x-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-4">
                    <input 
                        type="text" 
                        value={search}
                        placeholder="Search your watchlist..." 
                        className="input-primary flex-1" 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <GenreFilter genreList={genreList} setSelectedGenre={setSelectedGenre} />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                {watchList.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                        <h2 className="text-2xl font-bold mb-4">Your watchlist is empty</h2>
                        <p className="text-gray-400 mb-8">Start adding movies by clicking the heart icon on any movie card!</p>
                        <Link 
                            to="/" 
                            className="btn btn-primary"
                        >
                            Browse Movies
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredMovies.map(movie => (
                                <Moviecard key={movie.id} movie={movie} />
                            ))}
                        </div>
                        
                        {filteredMovies.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-gray-400">No movies match your search</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </main>
    );
}

export default WatchList;