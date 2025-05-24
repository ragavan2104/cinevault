import { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState(() => {
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });
  const [genreList, setGenreList] = useState([]);
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=0f8288318000b406848476d98f116b36`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch genres');
        const data = await response.json();
        setGenreList(data.genres || []);
      } catch (error) {
        console.error('Error fetching genres:', error);
        setGenreList([]);
      }
    };
    
    fetchGenres();
  }, []);
  // Save watchlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchList));
  }, [watchList]);
  const toggleWatchList = (movie) => {
    if (!movie) return;
    
    const index = watchList.findIndex((m) => m.id === movie.id);
    if (index === -1) {
      setWatchList([...watchList, movie]);
    } else {
      setWatchList([...watchList.slice(0, index), ...watchList.slice(index + 1)]);
    }
    console.log('Toggling movie:', movie.title, 'New watchlist length:', index === -1 ? watchList.length + 1 : watchList.length - 1);
  };

  return (
    <WatchListContext.Provider value={{ watchList, setWatchList, genreList, toggleWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
};