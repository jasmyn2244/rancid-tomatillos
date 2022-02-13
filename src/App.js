import React from 'react';
import Header from './Components/Header/Header.js';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';
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

export default App;
