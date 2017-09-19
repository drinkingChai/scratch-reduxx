import React, { Component } from 'react'
// import './random'

const count = (state = 0, action)=> {
  if (action && action.type == 'INCREMENT') return ++state
  else if (action && action.type == 'DECREMENT') return --state
  return state
}

const appState = (state = {}, action)=> {
  return {
    count: count(state.count, action)
  }
}

  


class App extends Component {
  constructor() {
    super()
    this.state = appState() 
    this.upvote = this.upvote.bind(this)
    this.downvote = this.downvote.bind(this)
  }

  upvote() {
    const newState = appState(this.state, { type: 'INCREMENT' })
    this.setState(newState)
  }

  downvote() {
    const newState = appState(this.state, { type: 'DECREMENT' })
    this.setState(newState)
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
