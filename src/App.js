import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import movieData from './dummy-data';

class App extends React.Component {
  constructor() {
    super()
    this.state = { movies: movieData.movies };
  }

  render() {
    return (
      <h1>Is this working?</h1>
    )
  }
}

export default App;
