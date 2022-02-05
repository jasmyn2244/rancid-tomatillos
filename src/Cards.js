import React from 'react';
import './Cards.css';

const Cards = ({ title, posterPath, releaseDate, avgRating, id }) => {
    return (
        <section className='movie-cards'>
            <img src={posterPath} alt={title} />
            <p>{title}</p>
            <p>{avgRating.toFixed(1)}</p>
        </section>
    )
}

export default Cards
