import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w300";

const Movie = ({ title, poster_path, overview, vote_average }) => {
return (
  <div className="movie">
    <img src={poster_path ? (IMG_API + poster_path) : "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cover&w=332&q=80"} alt={title} />

    <div className="movie-info">
      <h3>{title}</h3>
      <span>{vote_average}</span>
    </div>

    <div className="movie-overview">
      <h2>Overview:</h2>
      <p>{overview}</p>
    </div>
  </div>
  )}

export default Movie
