import React from "react";
import './MovieDetails.scss';
import { Link } from 'react-router-dom';
import { getSingleMovie } from '../../api-calls';

class MovieDetails extends React.Component {
  constructor({ movieID }) {
    super({ movieID });
    this.state = {
      selectedMovie: {},
      id: movieID,
      error: ''
    }
  }

  componentDidMount = () => {
    console.log(this.state.id)
    getSingleMovie(this.state.id)
      .then(cleanedData => this.setState({ selectedMovie: cleanedData }))
  }

  render () {
    const selectedMovie = this.state.selectedMovie;
    return (
      <section className='movie-details-container'>
        <section className='gen-movie'>
          <div>
            <img src={selectedMovie.backdrop_path} alt={selectedMovie.title}
            />
          </div>
          <div className='title-other-details'>
            <h2 className='movie-title'>{selectedMovie.title}</h2>
            {selectedMovie.tagline && <h3>{selectedMovie.tagline}</h3>}
            <div className='row-movie-details'>
              <p>Rating: {selectedMovie.average_rating}</p>
              <p>Release Date: {selectedMovie.release_date}</p>
              <p>Duration: {selectedMovie.runtime}</p>
            </div>
            <Link to={"/"}>
              <button className='back-to-main-button'>Back to Main</button>
            </Link>
            <p className='overview'>{selectedMovie.overview}</p>
          </div>
        </section>
        <section className='movie-details'>
          <p>Budget: {selectedMovie.budget}</p>
          <p>Revenue: {selectedMovie.revenue}</p>
          <p>Genres: {selectedMovie.genres}</p>
        </section>
      </section>
    )
  }

}

// const MovieDetails = ({ selectedMovie }) => {

//   return (
//     <section className='movie-details-container'>
//       <section className='gen-movie'>
//         <div>
//           <img src={selectedMovie.backdrop_path} alt={selectedMovie.title}
//           />
//         </div>
//         <div className='title-other-details'>
//           <h2 className='movie-title'>{selectedMovie.title}</h2>
//           {selectedMovie.tagline && <h3>{selectedMovie.tagline}</h3>}
//           <div className='row-movie-details'>
//             <p>Rating: {selectedMovie.average_rating}</p>
//             <p>Release Date: {selectedMovie.release_date}</p>
//             <p>Duration: {selectedMovie.runtime}</p>
//           </div>
//           <Link to={"/"}>
//             <button className='back-to-main-button'>Back to Main</button>
//           </Link>
//           <p className='overview'>{selectedMovie.overview}</p>
//         </div>
//       </section>
//       <section className='movie-details'>
//         <p>Budget: {selectedMovie.budget}</p>
//         <p>Revenue: {selectedMovie.revenue}</p>
//         <p>Genres: {selectedMovie.genres}</p>
//       </section>
//     </section>
//   )
// }

export default MovieDetails;
