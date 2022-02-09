const getAllMovies = () => {
    return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
        .then(response => checkResponseStatus(response)
        )
}

const getSingleMovie = (id) => {
    console.log("id", id)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => checkResponseStatus(response))
    // .then(data => this.setState({
    //     selectedMovie: data.movie,
    //     isSelected: true,
    // }));
}

const checkResponseStatus = (response) => {
    if (!response.ok) {
        throw new Error(`Error`)
    } else {
        console.log("response", response)
        return console.log(response.json())
    }
}

export { getAllMovies, getSingleMovie }