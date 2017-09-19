/* const appState = {
  count: 0
}*/

const count = (state = 0, action)=> {
  if (action && action.type == 'INCREMENT') return ++state
  else if (action && action.type == 'DECREMENT') return --state
  return state
}

// appState.count = count(appState.count, { type: 'INCREMENT' })
// console.log(appState)


const app = (state = {}, action)=> {
  return {
    count: count(state.count, action)
  }
}

const appState1 = app()
console.log(appState1) // 0

const appState2 = app(appState1, { type: 'INCREMENT' })
console.log(appState2) // 1

const appState3 = app(appState2, { type: 'INCREMENT' }) // 2
const appState4 = app(appState3, { type: 'INCREMENT' }) // 3
const appState5 = app(appState4, { type: 'DECREMENT' }) // 2
const appState6 = app(appState5, { type: 'DECREMENT' }) // 1
const appState7 = app(appState6, { type: 'INCREMENT' }) // 2

console.log(appState7) // 2
