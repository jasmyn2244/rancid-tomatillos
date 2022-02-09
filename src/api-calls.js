const getAllMovies = () => {
    return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
        .then(response => checkResponseStatus(response))
        .then(data => cleanAllMovies(data))
}

const getSingleMovie = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => checkResponseStatus(response))
        .then(data => cleanSingleMovie(data))
}

const checkResponseStatus = (response) => {
    if (!response.ok) {
        throw new Error(`Error`)
    } else {
        return response.json()
    }
}

const cleanAllMovies = ({ movies }) => {
    const cleanedMovies = movies.map(movie => {
        return {
            id: movie.id,
            key: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            average_rating: movie.average_rating,
        }
    })

    return cleanedMovies
}

const cleanSingleMovie = ({ movie }) => {

    let budget;
    let revenue;
    let date;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    if (!movie.budget || movie.budget === 0) {
        budget = 'Not Available'
    } else {
        budget = formatter.format(movie.budget)
    }

    if (!movie.revenue || movie.revenue === 0) {
        revenue = 'Not Available'
    } else {
        revenue = formatter.format(movie.revenue)
    }

    let [year, month, day] = movie.release_date.split('-')
    date = [month, day, year].join('/')

    const cleanedMovie = {
        id: movie.id,
        title: movie.title,
        backdrop_path: movie.backdrop_path,
        release_date: date,
        overview: movie.overview,
        genres: movie.genres.join(', '),
        budget: budget,
        revenue: revenue,
        runtime: `${movie.runtime} minutes`,
        tagline: movie.tagline,
        average_rating: movie.average_rating.toFixed(1),
    }
    return cleanedMovie;
}

export { getAllMovies, getSingleMovie }