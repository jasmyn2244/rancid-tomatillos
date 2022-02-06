import React from "react";
import './MovieDetails.scss';

const MovieDetails = (props) => {
  return (
    <section className='movie-details-container'>
      <section className='gen-movie'>
        <div>
          <img className='movie-backdrop' src={props.selectedMovie.backdrop_path} alt={props.selectedMovie.title} />
        </div>
        <div>
          <h2 className='movie-title'>{props.selectedMovie.title}</h2>
          <div className='row-movie-details'>
            <p>Rating {props.selectedMovie.average_rating.toFixed(1)}</p>
            <p>Release Date: {props.selectedMovie.release_date}</p>
            <p>Duration: 1 hour 20 minutes</p>
          </div>
          <button className='back-to-main-button' onClick={() => props.displayMain()}>Back to Main</button>
          <p>This movie is about blah blah blah.</p>
        </div>
      </section>
      <section className='movie-details'>
        <section>
          <p>Tagline</p>
          <p>Genres</p>
          <p>Revenue</p>
          <p>Budge</p>
        </section>
      </section>
    </section>
  )
}

export default MovieDetails;
