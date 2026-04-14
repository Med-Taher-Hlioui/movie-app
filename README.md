# 🎬 MovieVerse — Modern Movie Explorer App

MovieVerse is a modern and dynamic web application built with React.js that allows users to search for movies, view detailed information, and watch trailers — all in one place.
It combines data from OMDb API (for movie details) and TMDb API (for trailers).

## 🚀 Features

🔎 Search any movie instantly using the OMDb API

🎥 Watch trailers fetched directly from TMDb

🧾 View full details (poster, year, genre, plot, and IMDb rating)

⚡ Responsive design — works beautifully on mobile and desktop

🎨 Modern & cinematic UI with smooth hover effects and dynamic layout

## 🛠️ Technologies Used
Category:	Tools
Frontend:	React.js (Hooks, Router, Conditional Rendering)
Styling:	CSS3 (custom theme with gradients and shadows)
APIs:	OMDb API, TMDb API
Build Tool:	Vite or Create React App
Version Control:	Git & GitHub

##📦 Project Structure

movie-app/
│
├── src/
│   ├── api/
│   │   └── tmdb.js               # Handles trailer fetching from TMDb
│   ├── components/
│   │   └── MovieCard.jsx         # Displays each movie card
│   ├── pages/
│   │   ├── Home.jsx              # Home page with search functionality
│   │   └── MovieDetail.jsx       # Movie detail + trailer page
│   ├── App.jsx                   # Main routes and layout
│   ├── App.css                   # Global styles (modern movie theme)
│   └── index.js                  # React entry point
│
├── .env                          # Stores your API keys securely
├── package.json
└── README.md


##🔑 Environment Variables



## 🧠 Key React Concepts Used

useState → to manage movie data and search input

useEffect → to fetch movies on load or when searching

React Router → for navigation between pages

Conditional Rendering → to handle empty results, loading states, etc.

## 🎨 UI & Design Notes

Dark cinematic theme inspired by Netflix & IMDb

Elegant hover animations for cards

Gold & red color palette (#feca57, #ff4655) for a premium movie feel

Responsive grid layout for movie cards

##🧩 Future Improvements
🍿 Add user authentication & favorites list

💬 Add movie reviews and ratings from TMDb

🔔 Add “Now Playing” and “Coming Soon” categories

🌍 Support multiple languages

### 👨‍💻 Author

Mohamed Taher Hlioui
Frontend Developer | React Enthusiast
📍 Tunisia
📧 medtaherhlioui@gmail.com

