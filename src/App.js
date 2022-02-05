import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import movieData from './dummy-data';
import MovieContainer from './MovieContainer';
import MovieDetails from './MovieDetails';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      selectedMovie: {},
      isSelected: false,
      error: '',
    };
  }

  componentDidMount = () => {
      fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies}))
      .catch(error => this.setState({error: error}))
  }

  handleClick = (id) => {
    //Note the set state will  be a bit lagged.
    const findMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({selectedMovie: findMovie, isSelected: true})
  }

  displayMain = () => {
    this.setState({isSelected: false})

  }

  render() {
    return (
      <>
        <Header />
        {this.state.isSelected && <MovieDetails selectedMovie={this.state.selectedMovie} displayMain={this.displayMain} /> }
        {!this.state.isSelected && <MovieContainer movies={this.state.movies} chooseMovie={this.handleClick} />}
        {this.state.error && <h2>Sorry, there seems to be an error. Please try again</h2>}
      </>
    )
  }
}

export default App;
