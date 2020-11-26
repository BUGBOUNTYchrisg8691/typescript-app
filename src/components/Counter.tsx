import React, { Component } from 'react'

import Count from "./Count"

interface Props {}

interface State {
  count: number
}

export default class Counter extends Component<Props, State> {
  state = {
    count: 0,
  }

  increment = () => {
    this.setState({
      count: (this.state.count + 1)
    })
  }
  
  decrement = () => {
    this.setState({
      count: (this.state.count - 1)
    })
  }

  render() {
    return (
      <div>
        <Count count={this.state.count}/>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
