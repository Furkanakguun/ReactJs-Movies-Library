import React from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

//5e09406e

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=c032e2d7";

const movie1 = {
  Title: "Spiderman in Cannes",
  Year: "2016",
  imdbID: "tt5978586",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input placeholder="Search for movies" />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container">
          <div className="movie">
              <p>{movie1.Year}</p>
    
          <div>
              <img src={movie1.Poster !== 'N/A' ? movie1.Poster : "https://via.placeholder.com/400"} alt={movie1.Title}/>
          </div>
          </div>
      </div>
    </div>
  );
};

export default App;
