import { emailChanged, passwordChanged, loginUserSucess, loginUserFailed, loginUser } from './types'
import firebase from 'firebase'

export const emailChange = text => {
  return {
    type: emailChanged,
    payload: text
  }
}

export const passwordChange = text => {
  return {
    type: passwordChanged,
    payload: text
  }
}

export const userLogin = ({ email, password }) => {
  return async (dispatch) => {
    dispatch({ type: loginUser })
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      userLoginSucceeded(dispatch, user)
    } catch (signInError) {
      try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        userLoginSucceeded(dispatch, user)
      } catch (creationError) {
        userLoginFailed(dispatch)
      }
    }
  }
}

const userLoginFailed = (dispatch) => {
  dispatch({ type: loginUserFailed })
}

const userLoginSucceeded = (dispatch, user) => {
  dispatch({
    type: loginUserSucess,
    payload: user
  })
}
