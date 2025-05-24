import React, { useContext } from 'react';
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { WatchListContext } from '../context/WatchListContext';

const Moviecard = ({ movie }) => {
    const { toggleWatchList, watchList } = useContext(WatchListContext);
    const inWatchList = watchList.find((m) => m.id === movie.id);

    return (
        <div className="card p-4 group">
            <div className="relative overflow-hidden rounded-lg">
                <img 
                    src={movie.poster_path 
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : 'https://via.placeholder.com/500x750?text=No+Image'
                    } 
                    alt={movie.title} 
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-sm text-gray-200 line-clamp-3">{movie.overview}</p>
                </div>
                <button 
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full backdrop-blur-sm
                             text-white hover:bg-black/70 transition-colors duration-200"
                    onClick={() => toggleWatchList(movie)}
                > 
                    {inWatchList ? <FaHeart className="text-red-500" size={20} /> : <FaRegHeart size={20} />} 
                </button>
                {movie.vote_average > 0 && (
                    <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        <FaStar className="text-yellow-500" />
                        <span className="text-white">{movie.vote_average.toFixed(1)}</span>
                    </div>
                )}
            </div>
            <div className="mt-4 space-y-2">
                <h3 className="text-lg font-bold truncate">{movie.title}</h3>
                <p className="text-sm text-gray-400">{new Date(movie.release_date).toLocaleDateString()}</p>
            </div>
        </div>
    );
}

export default Moviecard;