import React, { Component } from 'react';
import './App.css';
import Star from "./Star.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stars: []
    }
  }
  renderStars() {
    let stars = [...this.state.stars, <Star />]
    this.setState({
      stars,
    })
  }
  render() {
    setInterval(this.renderStars.bind(this), 1000)
    return (
      <div className="main-container">
        {this.state.stars}
      </div>
    );
  }
}

export default App;
