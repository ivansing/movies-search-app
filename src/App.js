import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";



const API_URL = "http://www.omdbapi.com?apikey=46ae7782";

const movie2 = {
  Title: "Underworld: The Battle of Lycans and Vampires",
  Year: "2017",
  imdbID: "tt6741780",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&S=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Lycans");
  }, []);
  return (
    /** Search  */
    <div className="app">
      <h1>Search Movies</h1>

      <div className="search">
        <input
          placeholder="Search Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
            src={SearchIcon} 
            alt="search" 
            onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {/** Show Movies cards */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
