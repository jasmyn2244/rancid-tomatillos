import React from 'react'
// import MovieContainer from '../MovieContainer/MovieContainer';
import './SearchBar.scss'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: ''
        }
    }

    getSearchInput = (event) => {
        this.setState({
            searchInput: event.target.value.toLowerCase()
        })
        console.log(this.state.searchInput)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.searchMovies(this.state.searchInput)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({ searchInput: '' })
    }

    render() {
        return (
            <form>
                <label>
                    <input type='text' name='search' value={this.state.searchInput} onChange={event => this.getSearchInput(event)} placeholder="Search"/>
                </label>
                <button onClick={event => this.handleSubmit(event)}>Click Me</button>
            </form>
            )
        }
}

export default SearchBar;