import React from 'react';
import './Cards.scss';
// import { getSingleMovie } from '../../api-calls';

// class Cards extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedMovie: {},
//             id: props.id,
//             error: ''
//         }
//     }

//     componentDidMount = () => {
//         getSingleMovie(this.state.id)
//             .then(cleanedData => this.setState({ selectedMovie: cleanedData }))
//     }

//     render(props) {
//         return (
//             <section tabIndex='0' className='movie-cards' id={this.state.id}>
//                 <img src={props.posterPath} alt={`${props.title} movie poster`} />
//                 <p>{props.title}</p>
//                 <p>{props.avgRating.toFixed(1)}</p>
//             </section>
//         )
//     }
// }



const Cards = ({ title, posterPath, avgRating, id }) => {

    return (
        <section data-cy='movie-cards' tabIndex='0' className='movie-cards' id={id}>
            <img data-cy='card-image' src={posterPath} alt={`${title} movie poster`} />
            <p data-cy='card-title'>{title}</p>
            <p data-cy='card-rating'>{avgRating.toFixed(1)}</p>
        </section>
    )
}

export default Cards
