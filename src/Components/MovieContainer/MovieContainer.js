import React from 'react';
import './MovieContainer.scss'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom';

const MovieContainer = ({ movies, chooseMovie }) => {
    const movieCards = movies.map(movie => {
        return (
            <Link to={`/${movie.title}`} key={movie.id}>
                <Cards
                    title={movie.title}
                    posterPath={movie.poster_path}
                    avgRating={movie.average_rating}
                    id={movie.id}
                    // key={movie.id}
                    chooseMovie={chooseMovie}
                />
            </Link>
        )
    })
    return (
        <section className='movie-container'>
            {movieCards}
        </section>
    )
}

export default MovieContainer
