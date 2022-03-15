import React from 'react';
import './SearchBar.scss';
import searchIcon from './search-3-256.png'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: ''
        }
    }

    getSearchInput = (event) => {
        this.setState({
            searchInput: event.target.value.toUpperCase()
        })
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
            <form className='search'>
                <input aria-label='search' className='search-bar' type='text' name='search' value={this.state.searchInput} onChange={event => this.getSearchInput(event)} placeholder="MOVIE TITLE"/>
                <button className= 'search-button' onClick={event => this.handleSubmit(event)}>
                    <img className="search-icon" src={searchIcon} alt="search icon"></img>
                </button>
            </form>
            )
        }
}

export default SearchBar;