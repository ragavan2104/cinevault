import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { WatchListContext } from '../context/WatchListContext';

const Navbar = () => {
    const { watchList } = useContext(WatchListContext);

    return (
        <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">                    <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white hover:text-gray-300 transition-colors">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                            <path 
                                fill="currentColor" 
                                d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v14h16V5H4zm2 2h12v2H6V7zm8 4H6v2h8V11zm-8 4h12v2H6v-2z"
                            />
                        </svg>
                        <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
                            CineVault
                        </span>
                    </Link>
                    <Link 
                        to="/watchlist" 
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                        <span>Watchlist</span>
                        <span className="px-2 py-1 text-sm bg-gray-700 rounded-full">{watchList.length}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;