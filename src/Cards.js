import React from 'react';
import './Cards.css';

const Cards = ({ title, posterPath, releaseDate, avgRating, id, chooseMovie }) => {
    return (
        <section className='movie-cards' id={id} onClick={() => chooseMovie(id)}>
            <img src={posterPath} alt={title} />
            <p>{title}</p>
            <p>{avgRating.toFixed(1)}</p>
        </section>
    )
}



export default Cards
