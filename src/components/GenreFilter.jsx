import React from "react";

const GenreFilter = ({ genreList = [], setSelectedGenre }) => {
    return (
        <select 
            className="input-primary w-48 bg-black/20 backdrop-blur-sm cursor-pointer"
            onChange={(e) => setSelectedGenre(e.target.value)}
            defaultValue=""
            aria-label="Filter movies by genre"
        >
            <option value="">All Genres</option>
            {genreList?.map(genre => (
                <option 
                    key={genre.id} 
                    value={genre.id}
                    className="bg-gray-800"
                >
                    {genre.name}
                </option>
            ))}
        </select>
    );
}

export default GenreFilter;