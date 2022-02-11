import React from 'react';
import './reset.scss';
import './App.scss';
import Header from './Components/Header/Header.js';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';
// import { getAllMovies, getSingleMovie } from './api-calls';
import { Route, Switch } from 'react-router-dom';



const App = () => {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/:movie"> <MovieDetails/> </Route>
        <Route exact path="/"> <MovieContainer/> </Route>
        <Route path="*"> <ErrorPage /> </Route>
      </Switch>
    </>
  )
}

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       movies: [],
//       selectedMovie: {},
//       error: '',
//     };
//   }

//   componentDidMount = () => {
//     getAllMovies()
//       .then(cleanedData => this.setState({ movies: cleanedData }))
//       .catch(error => this.setState({ error: error }))
//   }

//   chooseMovie = (id) => {
//     getSingleMovie(id)
//       .then(cleanedData => this.setState({ selectedMovie: cleanedData }))
//   }

//   render() {
//     return (
//       <>
//         <Header />
//           {this.state.error && <h2>Sorry you got an error. Please try again.</h2>}
//         <Switch>
//           {/* Console Logs are showing up twice in clicking on a movie 
//           If it wasn't getting logged twice, we would only get the error page.
//           May need an async function to make sure we're seeing a loader while API calls is loading.
//           */}
//           <Route exact path="/:movie" render={ ( { match } ) => {
//             const { movie } = match.params;
//             if (movie !== this.state.selectedMovie.title) {
//               return <ErrorPage />
//             } else {
//               return <MovieDetails selectedMovie={this.state.selectedMovie} /> 
//             }
//           }
//         }
//         />
//           <Route exact path="/" component= { () => <MovieContainer movies={this.state.movies} chooseMovie={this.chooseMovie} /> } />
//           <Route path="*"> <ErrorPage /> </Route>
//         </Switch>
//       </>
//     )
//   }
// }

export default App;
