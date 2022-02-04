import React from 'react';
import './Cards.css';

const Cards = ({ title, posterPath, releaseDate, avgRating, id }) => {
    return (
        <button className='movie-cards'>
            <img src={posterPath} alt='movie poster for {title}' />
            <span>{title}</span>
        </button>
    )
}

export default Cards 