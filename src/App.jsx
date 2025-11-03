import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Link to="/home" className="logo">🎬 CineScope</Link>
        </header>

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
