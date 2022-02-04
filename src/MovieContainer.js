import React from 'react';
import './MovieContainer.css'
import Cards from './Cards'

const MovieContainer = ({ movies }) => {
    const movieCards = movies.map(movie => {
        return (
            <Cards
                title={movie.title}
                posterPath={movie.poster_path}
                avgRating={movie.average_rating}
                releaseDate={movie.release_date}
                id={movie.id}
                key={movie.id}
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