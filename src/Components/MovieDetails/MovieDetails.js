import React from "react";
import './MovieDetails.scss';

const MovieDetails = (props) => {

  // formatMoney = (moneyValue) => {
  //   return moneyValue.toLocaleString('en-US', {
  //     style: 'currency',
  //     currency: 'USD',
  //   })
  // }

  return (
    <section className='movie-details-container'>
      <section className='gen-movie'>
        <div>
          <img src={props.selectedMovie.backdrop_path} alt={props.selectedMovie.title} />
        </div>
        <div className='title-other-details'>
          <h2 className='movie-title'>{props.selectedMovie.title}</h2>
          {props.selectedMovie.tagline && <h3>{props.selectedMovie.tagline}</h3>}
          <div className='row-movie-details'>
            <p>Rating: {props.selectedMovie.average_rating.toFixed(1)}</p>
            <p>Release Date: {props.selectedMovie.release_date}</p>
            <p>Duration: {props.selectedMovie.runtime} minutes</p>
          </div>
          <button className='back-to-main-button' onClick={() => props.displayMain()}>Back to Main</button>
          <p className='overview'>{props.selectedMovie.overview}</p>
        </div>
      </section>
      <section className='movie-details'>
        {props.selectedMovie.budget !== 0 ? <p>Budget: ${props.selectedMovie.budget}</p> : <p></p>}
        {props.selectedMovie.revenue !== 0 ? <p>Revenue: ${props.selectedMovie.revenue}</p> : <p></p>}
        <p>Genres: {props.selectedMovie.genres.join(', ')}</p>
      </section>
    </section>
  )
}

export default MovieDetails;
