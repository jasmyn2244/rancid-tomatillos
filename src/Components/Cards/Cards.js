import React from 'react';
import './Cards.scss';

const Cards = ({ title, posterPath, avgRating, id }) => {

    return (
        <section data-cy='movie-cards' className='movie-cards' id={id}>
            <img data-cy='card-image' src={posterPath} alt={`${title} movie poster`} />
            <h2 data-cy='card-title'>{title}</h2>
            <h2 data-cy='card-rating'>{avgRating.toFixed(1)}</h2>
        </section>
    )
}

export default Cards
