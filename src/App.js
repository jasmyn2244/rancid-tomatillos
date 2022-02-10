import React from 'react';
import './reset.scss';
import './App.scss';
import Header from './Components/Header/Header.js';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import { getAllMovies, getSingleMovie } from './api-calls';
import { Route } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      selectedMovie: {},
      error: '',
    };
  }

  componentDidMount = () => {
    getAllMovies()
      .then(cleanedData => this.setState({ movies: cleanedData }))
      .catch(error => this.setState({ error: error }))
  }

  handleClick = (id) => {
    getSingleMovie(id)
      .then(cleanedData => this.setState({ selectedMovie: cleanedData }))
  }

  render() {
    return (
      <>
        <Header />
        {/* {this.state.error && <h2>Sorry you got an error. Please try again.</h2>} */}


          <Route exact path="/:movie" render={ ( { match } ) => {
           return <MovieDetails selectedMovie={this.state.selectedMovie} /> 
          } 
        }/>

          <Route exact path="/" component= { () => <MovieContainer movies={this.state.movies} chooseMovie={this.handleClick} /> } />
          <Route path="*"> <ErrorPage /> </Route>
      </>
    )
  }
}

export default App;
