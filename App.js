import React from 'react';
import moviesData from './moviesData'; // Adjust the path based on the actual location of moviesData.js

function Movie({ movie }) {
  return (
    <div className="movie" style={{ marginBottom: '20px', display: 'flex' }}>
      <img src={movie.posterUrl} alt={movie.title} style={{ width: '150px', height: 'auto', marginRight: '20px' }} />
      <div className="movie-info" style={{ textAlign: 'left' }}>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
        <p>Director: {movie.director}</p>
        <p>Release Year: {movie.releaseYear}</p>
        <p>Category: {movie.category}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1>Top 10 Movies</h1>
      <div className="movies-container">
        {moviesData.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;