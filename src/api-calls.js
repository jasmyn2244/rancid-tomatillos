import { cleanAllMovies, cleanSingleMovie } from './utilities'

const getAllMovies = () => {
    return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/")
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

export { getAllMovies, getSingleMovie }