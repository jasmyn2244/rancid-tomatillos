import React from 'react';
import './MovieContainer.scss'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom';
import { getAllMovies } from '../../api-calls.js'


class MovieContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            error: ''
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
            <Link to={`/${movie.title}`} key={movie.id}>
                <Cards
                    title={movie.title}
                    posterPath={movie.poster_path}
                    avgRating={movie.average_rating}
                    id={movie.id}
                    // chooseMovie={chooseMovie}
                />
            </Link>
        )})

        return movieCards
    }

    render() {
        return (
            <section className='movie-container' >
                { this.getMovieCards() }
            </section>
        )
    }

}

export default MovieContainer

// const MovieContainer = ({ movies, chooseMovie }) => {
//     const movieCards = movies.map(movie => {
//         return (
//             <Link to={`/${movie.title}`} key={movie.id}>
//                 <Cards
//                     title={movie.title}
//                     posterPath={movie.poster_path}
//                     avgRating={movie.average_rating}
//                     id={movie.id}
//                     chooseMovie={chooseMovie}
//                 />
//             </Link>
//         )
//     })
    // return (
    //     <section className='movie-container'>
    //         {movieCards}
    //     </section>
    // )


