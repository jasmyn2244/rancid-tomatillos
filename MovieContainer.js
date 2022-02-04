import React from 'react';
import './MovieContainer.css'

const MovieContainer = ({ movies }) => {
    movies.map(movie => {
        <Card
            title={movie.title}
            posterPath={movie.poster_path}
            avgRating={movie.average_rating}
            releaseDate={movie.release_date}
            key={movie.id}
        />
    })
}

export default MovieContainer