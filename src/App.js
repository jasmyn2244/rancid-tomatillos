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
    };
  }
  componentDidMount = () => {
    this.setState({movies: movieData.movies})
  }
  onClick = (id) => {
    //Note the set state will  be a bit lagged.
    const findMovie = this.state.movies.find(movie => movie.id === id)
    this.setState({selectedMovie: findMovie})
  }

  render() {
    return (
      <>
        <Header />
        <MovieDetails />
        <MovieContainer movies={ this.state.movies } chooseMovie={ this.onClick }/>
      </>
    )
  }
}

export default App;
