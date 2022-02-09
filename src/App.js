import React from 'react';
import './reset.scss';
import './App.scss';
import Header from './Components/Header/Header.js';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import { getAllMovies, getSingleMovie } from './api-calls';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      selectedMovie: {},
      isSelected: false,
      error: '',
      errorMsg: '',
      getSingleMovie: getSingleMovie
    };
  }

  componentDidMount = () => {
    getAllMovies()
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => this.setState({ error: error }))
  }

  handleClick = (id) => {
    getSingleMovie(id)
      .then(cleanedData => this.setState({ selectedMovie: cleanedData, isSelected: true }))
  }

  displayMain = () => {
    this.setState({ isSelected: false })
  }

  render() {
    return (
      <>
        <Header />
        {this.state.isSelected && <MovieDetails selectedMovie={this.state.selectedMovie} displayMain={this.displayMain} />}
        {!this.state.isSelected && <MovieContainer movies={this.state.movies} chooseMovie={this.handleClick} />}
        {this.state.error && <h2>Sorry you got an error. Please try again.</h2>}
      </>
    )
  }
}

export default App;
