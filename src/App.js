import React from 'react';
import Header from './Components/Header/Header.js';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import SearchBar from './Components/SearchBar/SearchBar';
import { Route, Switch } from 'react-router-dom';
import './reset.scss';
import './App.scss';



const App = () => {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path ="/:id" render={({ match }) => {
          return < MovieDetails movieID={ match.params.id }/>
        }}></Route>
        <Route exact path="/"> <MovieContainer/> </Route>
        <Route path="*"> <ErrorPage /> </Route>
      </Switch>
    </>
  )
}


        // <Route exact path="/:movie" render={({ match }) => {
        //     const { movie } = match.params;
        //     if (movie !== this.state.selectedMovie.title) {
        //       return <ErrorPage />
        //     } else {
        //       return <MovieDetails selectedMovie={this.state.selectedMovie} /> 
        //     }
        //   }
        // }
        // />


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
