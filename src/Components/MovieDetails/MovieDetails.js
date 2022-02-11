import React from "react";
import './MovieDetails.scss';
import { Link } from 'react-router-dom';
import { getSingleMovie } from '../../api-calls';
import ErrorPage from '../ErrorPage/ErrorPage';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {},
      id: props.movieID,
      error: ''
    }
  }

  componentDidMount = () => {
    getSingleMovie(this.state.id)
      .then(cleanedData => this.setState({ selectedMovie: cleanedData }))
      .catch(error => {
        this.setState({error: true})
        // this.displayError()
      })
  }

  // identifyError = () => {
  //   if (this.state.error) {

  //   }
  // }

  // displayError = () => {
  //   if (this.state.error) {
  //     return (
  //       <div>
  //         <h2>Gabby</h2>
  //       </div>
  //     )
  //   }
  // }

  render() {
    const selectedMovie = this.state.selectedMovie;
    // {this.state.error && <ErrorPage/>}

    let thingToReturn;
    if (this.state.error) {
      thingToReturn = (<ErrorPage />)
    } else if (!this.state.error) {
      thingToReturn = (<section className='movie-details-container'>
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
      </section>)
    }


    return (
      // <section className='movie-details-container'>
      //   <section className='gen-movie'>
      //     <div>
      //       <img src={selectedMovie.backdrop_path} alt={selectedMovie.title}
      //       />
      //     </div>
      //     <div className='title-other-details'>
      //       <h2 className='movie-title'>{selectedMovie.title}</h2>
      //       {selectedMovie.tagline && <h3>{selectedMovie.tagline}</h3>}
      //       <div className='row-movie-details'>
      //         <p>Rating: {selectedMovie.average_rating}</p>
      //         <p>Release Date: {selectedMovie.release_date}</p>
      //         <p>Duration: {selectedMovie.runtime}</p>
      //       </div>
      //       <Link to={"/"}>
      //         <button className='back-to-main-button'>Back to Main</button>
      //       </Link>
      //       <p className='overview'>{selectedMovie.overview}</p>
      //     </div>
      //   </section>
      //   <section className='movie-details'>
      //     <p>Budget: {selectedMovie.budget}</p>
      //     <p>Revenue: {selectedMovie.revenue}</p>
      //     <p>Genres: {selectedMovie.genres}</p>
      //   </section>
      // </section>
      thingToReturn
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
