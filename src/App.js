import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import movieData from './dummy-data';
import MovieContainer from './MovieContainer';

class App extends React.Component {
  constructor() {
    super()
    this.state = { movies: movieData.movies };
  }

  render() {
    return (
      <>
        <Header />
        <MovieContainer movies={this.state.movies} />
      </>
    )
  }
}

export default App;
