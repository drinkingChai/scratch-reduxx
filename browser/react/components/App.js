import React, { Component } from 'react'
import './random'

const state = {
  count : 0
}

function count(state = 0, action) {
  switch (state) {
    case 'INCREMENT':
      return state += 1
    case 'DECREMENT':
      return state -= 1
    default:
      return state
  }
}

function countApp(state = {}, action) {
  return {
    count: count(state.count, action)
  }
}
    


class App extends Component {
  constructor() {
    super()
    this.state = state 
    this.upvote = this.upvote.bind(this)
    this.downvote = this.downvote.bind(this)
  }

  upvote() {
  }

  downvote() {
  }

  render() {
    const { upvote, downvote } = this
    const { count } = this.state

    return (
      <div>
        <h1>{ count }</h1>
        <button onClick={ upvote }>+ 1</button>
        <button onClick={ downvote }>- 1</button>
      </div>
    )
  }
}

export default App
