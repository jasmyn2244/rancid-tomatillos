// import React, { useReducer } from 'react';
import React from 'react';
import './MovieContainer.scss';
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../../api-calls.js';
import ErrorPage from '../ErrorPage/ErrorPage';
import SearchBar  from '../SearchBar/SearchBar';


class MovieContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            error: '',
            searchResults: [],
        }
    }

    componentDidMount = () => {
        getAllMovies()
            .then(cleanedData => this.setState({ movies: cleanedData }))
            .catch(error => this.setState({ error: error }))
    }

    getMovieCards = () => {
        const movieCards = this.state.movies.map(movie => {
            return (
                <Link to={`/${movie.id}`} key={movie.id}>
                    <Cards
                        title={movie.title}
                        posterPath={movie.poster_path}
                        avgRating={movie.average_rating}
                        id={movie.id}
                    />
                </Link>
            )
        })

        return movieCards
    }

    searchMovies = (searchInput) => {
        console.log('Search input', searchInput)
        let filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(searchInput))
        console.log('Filtered Movies:', filteredMovies)
        this.setState({searchResults: filteredMovies});
    }

    getSearchMovieCards = () => {
        const searchedMovies = this.state.searchResults.map(movie => {
            return (
                <Link to={`/${movie.id}`} key={movie.id}>
                    <Cards
                        title={movie.title}
                        posterPath={movie.poster_path}
                        avgRating={movie.average_rating}
                        id={movie.id}
                    />
                </Link>
            )
        })
        return searchedMovies
    }

    render() {
        if (this.state.error) {
            return <ErrorPage />
        } else {
            return (
                <section className='movie-container' >
                    <SearchBar searchMovies={this.searchMovies} />
                    {!this.state.searchResults.length && this.getMovieCards()}
                    {this.state.searchResults.length && this.getSearchMovieCards()}
                    {console.log('State results:', this.state.searchResults)}

                </section>
            )
        }
    }
}

export default MovieContainer;


