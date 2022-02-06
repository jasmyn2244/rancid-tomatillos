import React from 'react';
import './Cards.scss';

const Cards = ({ title, posterPath, releaseDate, avgRating, id, chooseMovie }) => {
    return (
        <section tabIndex='0' className='movie-cards' id={id} onClick={() => chooseMovie(id)}>
            <img src={posterPath} alt={`${title} movie poster`} />
            <p>{title}</p>
            <p>{avgRating.toFixed(1)}</p>
        </section>
    )
}



export default Cards
