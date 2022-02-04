import React from 'react';
import './MovieContainer.css'

const MovieContainer = ({ movies }) => {
    const movieCards = movies.map(movie => {
        return (
            <Card
                title={movie.title}
                posterPath={movie.poster_path}
                avgRating={movie.average_rating}
                releaseDate={movie.release_date}
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