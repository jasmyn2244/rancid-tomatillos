import React from 'react';
import './MovieContainer.scss'
import Cards from '../Cards/Cards'

const MovieContainer = ({ movies, chooseMovie }) => {
    const movieCards = movies.map(movie => {
        return (
            <Cards
                title={movie.title}
                posterPath={movie.poster_path}
                avgRating={movie.average_rating}
                releaseDate={movie.release_date}
                id={movie.id}
                key={movie.id}
                chooseMovie={chooseMovie}
            />
        )
    })
    return (
        <section className='movie-container'>
            {movieCards}
        </section>
    )
}

export default MovieContainer
