import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// OMDb API key
const OMDB_API = `https://www.omdbapi.com/?apikey=b0954c9c`;
// TMDb API key
const TMDB_API_KEY = "f16faffdf8f923ce0387d909d9e13951";
const TMDB_API = `https://api.themoviedb.org/3`;

export default function MovieDetail() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  // 1️⃣ Fetch movie details from OMDb
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`${OMDB_API}&i=${imdbID}&plot=full`);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("OMDb fetch error:", err);
      }
    };
    fetchMovie();
  }, [imdbID]);

  // 2️⃣ Fetch trailer from TMDb
  useEffect(() => {
    const fetchTrailer = async () => {
      if (!movie || !movie.Title) return;

      try {
        // Search for movie on TMDb
        const searchRes = await fetch(
          `${TMDB_API}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movie.Title)}`
        );
        const searchData = await searchRes.json();

        if (searchData.results && searchData.results.length > 0) {
          const movieId = searchData.results[0].id;

          // Fetch videos for the movie
          const videoRes = await fetch(
            `${TMDB_API}/movie/${movieId}/videos?api_key=${TMDB_API_KEY}`
          );
          const videoData = await videoRes.json();

          // Find YouTube trailer
          const trailer = videoData.results.find(
            (v) => v.type === "Trailer" && v.site === "YouTube"
          );

          setTrailerKey(trailer ? trailer.key : null);
        } else {
          setTrailerKey(null);
        }
      } catch (err) {
        console.error("TMDb fetch error:", err);
        setTrailerKey(null);
      }
    };

    fetchTrailer();
  }, [movie]);

  if (!movie) return <p>Loading movie details...</p>;

  return (
    <div className="movie-detail">
      <Link to="/home" className="back-btn">← Back</Link>

      <div className="movie-detail-content">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
          alt={movie.Title}
        />

        <div className="movie-detail-info">
          <h2>{movie.Title}</h2>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>

          {trailerKey ? (
            <div className="trailer">
              <h3>🎥 Trailer</h3>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title={`${movie.Title} Trailer`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p>No trailer available 😢</p>
          )}
        </div>
      </div>
    </div>
  );
}
