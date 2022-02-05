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
      errorMsg: ''
    };
  }

  componentDidMount = () => {
      fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => this.handleError(response))
      .then(data => this.setState({movies: data.movies}))
      .catch(error => {
        this.setState({error: response.status})
        this.decideErrorMsg()
      })
  }
  handleError = (response) => {
    if (response.ok) {
        return response.json()
    } else if (!response.ok) {
      throw new Error (response)
      this.setState({error: response.status})
      this.decideErrorMsg()

    }
  }
  //
  // checkError(response) {
  //   if (response.status === 422 || response.status === 500) {
  //     // this.setState({error: response.status})
  //     // this.decideErrorMsg()
  //   } else {
  //     return response.json()
  //   }
  // }

  handleClick = (id) => {
    //Note the set state will  be a bit lagged.
    const findMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({selectedMovie: findMovie, isSelected: true})
  }

  displayMain = () => {
    this.setState({isSelected: false})
  }

  decideErrorMsg = () => {
    let errorMsg;
    if (this.state.error === 500) {
      errorMsg = 'We fucked up. Sorry.'
    } else if (this.state.error === 404) {
      errorMsg = 'You fucked up. Sorry'
    }
    this.setState({
      errorMsg: errorMsg
    })
    console.log(this.state.errorMsg)
  }

  render() {
    return (
      <>
        <Header />
        {this.state.isSelected && <MovieDetails selectedMovie={this.state.selectedMovie} displayMain={this.displayMain} /> }
        {!this.state.isSelected && <MovieContainer movies={this.state.movies} chooseMovie={this.handleClick} />}
        {this.state.error && <h2>{this.state.errorMsg}</h2>}
      </>
    )
  }
}

export default App;
