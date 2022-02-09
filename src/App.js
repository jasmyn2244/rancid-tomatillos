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
      errorMsg: ''
    };
  }

  componentDidMount = () => {
    console.log('component did mount')
    getAllMovies()
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => this.setState({ error: error }))
  }

  // cleanData = (data) => {
  //   const cleanedData = data.map(movie => {
  //     return { movie.title }
  //   })
  //   console.log('Did clean data get called?')
  //   //this.setState({ movies: data.movies }
  // }



  handleClick = (id) => {
    getSingleMovie(id)
    // fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    //   .then(response => response.json())
    //   .then(data => this.setState({
    //     selectedMovie: data.movie,
    //     isSelected: true,
    //   }))
    //Note the set state will  be a bit lagged.
    // const findMovie = this.state.movies.find(movie => movie.id === id);
    // this.setState({selectedMovie: findMovie, isSelected: true})
  }

  displayMain = () => {
    this.setState({ isSelected: false })
  }
  // May use this code to display specific error messages.
  // decideErrorMsg = () => {
  //   let errorMsg;
  //   if (this.state.error === 500) {
  //     errorMsg = 'We fucked up. Sorry.'
  //   } else if (this.state.error === 404) {
  //     errorMsg = 'You fucked up. Sorry'
  //   }
  //   this.setState({
  //     errorMsg: errorMsg
  //   })
  //   console.log(this.state.errorMsg)
  // }

  render() {
    console.log("this.state.error", this.state.error)
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
