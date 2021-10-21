import { Reducer } from 'redux'
import { SEND_OPTIONS_CATEGORY_INFO, SEND_USER_INFO } from '../actions'

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
      return { ...state, user: [{ name: action.name, email: action.email }] }
    default:
      return state
  }
}

const INITIAL_STATE_OPTIONS_CATEGORY = {
  category:
    {
      id: ''
    }
}

const OptionsCategory: Reducer = (state = INITIAL_STATE_OPTIONS_CATEGORY, action) => {
  switch (action.type) {
    case SEND_OPTIONS_CATEGORY_INFO:
      return { ...state, category: { id: action.type.id } }
    default:
      return state
  }

}

export default { game, OptionsCategory }
