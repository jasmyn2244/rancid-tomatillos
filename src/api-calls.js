const getAllMovies = () => {
    console.log("getAllMovies")
    return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
        .then(response => checkResponseStatus(response)
        )
}

const getSingleMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => response.json())
        .then(data => this.setState({
            selectedMovie: data.movie,
            isSelected: true,
        }));
}

const checkResponseStatus = (response) => {
    console.log("checkResponseStatus", response)
    if (!response.ok) {
        throw new Error(`Error`)
    } else {
        //console.log("response.json", response.json())
        return response.json()
    }
}

export { getAllMovies, getSingleMovie }