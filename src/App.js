import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header'

class App extends React.Component {
  constructor() {
    super()
    this.state = { movies: [] }
  }

  render() {
    return (
      <Header />
    )
  }

export default App;
