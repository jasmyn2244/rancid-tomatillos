import React from 'react';
import './Cards.scss';

const Cards = ({ title, posterPath, avgRating, id }) => {

    return (
        <section data-cy='movie-cards' className='movie-cards' id={id}>
            <img data-cy='card-image' src={posterPath} alt={`${title} movie poster`} />
            <p data-cy='card-title'>{title}</p>
            <p data-cy='card-rating'>{avgRating.toFixed(1)}</p>
        </section>
    )
}

export default Cards
