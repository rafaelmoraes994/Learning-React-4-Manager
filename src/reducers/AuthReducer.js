import { emailChanged, passwordChanged, loginUserSucess, loginUserFailed, loginUser } from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case emailChanged:
      return { ...state, email: action.payload }
    case passwordChanged:
      return { ...state, password: action.payload }
    case loginUserSucess:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      }
    case loginUserFailed:
      return {
        ...state,
        error: 'Authentication Failed',
        loading: false,
        password: ''
      }
    case loginUser:
      return { ...state, loading: true, error: '' }
    default:
      return state
  }
}
