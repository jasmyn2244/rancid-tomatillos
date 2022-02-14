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
    const cleanedMovie = {
        id: movie.id,
        title: movie.title,
        backdrop_path: movie.backdrop_path,
        release_date: formatDate(movie.release_date),
        overview: movie.overview,
        genres: movie.genres.join(', '),
        budget: formatMoney(movie.budget),
        revenue: formatMoney(movie.revenue),
        runtime: `${movie.runtime} minutes`,
        tagline: movie.tagline,
        average_rating: movie.average_rating.toFixed(1),
    }
    return cleanedMovie;
}

const formatMoney = (numToConvert) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    if (!numToConvert || numToConvert === 0) {
        return 'Not Available'
    } else {
        return (formatter.format(numToConvert))
    }
}

const formatDate = (date) => {
    let [year, month, day] = date.split('-')
    return [month, day, year].join('/')
}

export { cleanAllMovies, cleanSingleMovie }