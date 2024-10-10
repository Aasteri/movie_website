import React, { createContext, useState } from 'react';
import moviesData from '../data/movies';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(moviesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <MovieContext.Provider
      value={{
        movies: filteredMovies,
        searchQuery,
        setSearchQuery,
        showModal,
        toggleModal,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
