import React, {Component} from 'react'

class Star extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        top: "50%",
        left: "50%",
        position: "absolute",
        backgroundColor: "red",
        width: "5px",
        height: "5px",
      },
      randomX: (Math.random() * 10 + 1) * (Math.floor(Math.random()*2) === 1 ? 1 : -1),
      randomY: (Math.random() * 10 + 1) * (Math.floor(Math.random()*2) === 1 ? 1 : -1),
    }
  }

  drawLine(directions){
    let {randomX, randomY} = this.state
    let currTop = getComputedStyle(this.el).top
    let currLeft = getComputedStyle(this.el).left
    let style = {
      top: `${parseInt(currTop) + randomX}px`,
      left:`${parseInt(currLeft) + randomY}px`,
    }

    this.setState({
      style: Object.assign({}, this.state.style, style),
      randomX,
      randomY,
    })
  }

  render(){
    setTimeout(this.drawLine.bind(this), 10)
    return (
      <div
        className="star"
        style={this.state.style}
        ref={div => this.el = div} >
      </div>
    )
  }
}

export default Star
