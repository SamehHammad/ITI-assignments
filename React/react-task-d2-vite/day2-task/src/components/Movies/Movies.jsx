import React, { Component } from "react";
import axios from "axios";
import "./Movies.css";

class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
      )
      .then((response) => response.data)
      .then((movies) => this.setState({ movies }));
  }

  render() {
    return (
      <div className="container">
        <h1>Movies</h1>
        {this.state.movies.map((movie) => (
          <div key={movie.id} className="card">
            <p>
              Movie Name ➔<span>{movie.Title}</span>
            </p>
            <p>
              Runtime ➔<span>( {movie.Runtime})</span>
            </p>
            <p>
              Production year ➔<span>( {movie.Year})</span>
            </p>
            <img src={movie.Poster} />
          </div>
        ))}
      </div>
    );
  }
}

export default Movies;
