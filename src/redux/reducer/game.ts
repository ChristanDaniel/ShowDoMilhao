import { Reducer } from 'redux'
import { SEND_USER_INFO } from '../actions'

const INITIAL_STATE = {
  user: [
    {
      nome: '',
      email: ''
    }
  ]
}

const game: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_USER_INFO:
      console.log(action)
      return { ...state, user: [{ name: action.name, email: action.email }] }
    default:
      return state
  }
}

export default game
