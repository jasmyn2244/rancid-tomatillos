import React from 'react';
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../../api-calls.js';
import ErrorPage from '../ErrorPage/ErrorPage';
import SearchBar  from '../SearchBar/SearchBar';
import './MovieContainer.scss';


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

    renderCards = (movieArr) => {

        const linkStyle = {
            width: '250px',
            textDecoration: 'none'
        }

        return movieArr.map(movie => {
            return (
                <Link to={`/${movie.id}`} key={movie.id} style= {linkStyle}>
                    <Cards
                        title={movie.title}
                        posterPath={movie.poster_path}
                        avgRating={movie.average_rating}
                        id={movie.id}
                    />
                </Link>
            )
        })
    }

    getMovieCards = () => {
        return this.renderCards(this.state.movies)
    }

    searchMovies = (searchInput) => {
        let filteredMovies = this.state.movies.filter(movie => movie.title.toUpperCase().includes(searchInput))
        this.setState({searchResults: filteredMovies, isSearching: true});
    }

    backToMain = () => {
        return (
            <Link to={"/"}>
                <section className='main-page-btn-section'>
                    <button className='back-to-main-button' onClick={event => this.resetState(event)} style={{textDecoration: 'none'}}>Back to Main</button>
                </section>
            </Link>
        )
    }

    getSearchMovieCards = () => {
        if (this.state.searchResults.length === 0) {
            return ( 
                <section className='search-error'>
                    <h2 className='error-text'>No tomatillos for you!<br/>Try a different movie!</h2>
                    {this.backToMain()}
                </section>
            )
        } else {
            return (
            <>
                {this.renderCards(this.state.searchResults)}
                {this.backToMain()}
            </>
            )
        }
    }

    resetState = () => {
        this.setState({isSearching: false});
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