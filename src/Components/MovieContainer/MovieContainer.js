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
            isSearching: false,
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
        let filteredMovies = this.state.movies.filter(movie => movie.title.toUpperCase().includes(searchInput))
        this.setState({searchResults: filteredMovies, isSearching: true});
    }


    getSearchMovieCards = () => {
            if (this.state.searchResults.length === 0) {
                return ( 
                <section>
                    <h2 className='search-error'>No tomatillos for you! Try a different movie!</h2>
                    <Link to={"/"}>
                        <button tabIndex='0' className='back-to-main-button'>Back to Main</button>
                    </Link>
                </section>
                )
            } else {
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
            return (
            <>
            {searchedMovies}
            <Link to={"/"}>
                <button tabIndex='0' className='back-to-main-button'>Back to Main</button>
            </Link>
            </>
            )

        }
        
    }

    render() {
        if (this.state.error) {
            return <ErrorPage />
        } else {
            return (
                <section className='movie-container' >
                    <SearchBar searchMovies={this.searchMovies} />
                   {this.state.isSearching && this.getSearchMovieCards()}
                    {!this.state.isSearching && this.getMovieCards()}
                </section>
            )
        }
    }
}

export default MovieContainer;


