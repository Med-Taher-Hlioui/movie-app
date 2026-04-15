import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Avengers");

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search || []);
  };
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    searchMovies(search);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") searchMovies(search);
  };

  return (
    <div className="home-container">
      <h1 className="title">Find Your Favorite Movie 🍿</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={() => searchMovies(search)}>Search</button>
      </div>

      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p className="no-results">No movies found 😢</p>
        )}
      </div>
    </div>
  );
}
