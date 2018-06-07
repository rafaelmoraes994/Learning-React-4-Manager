import React, { Component } from 'react'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
// import { FirebaseInit } from './components/common'
import LoginForm from './components/LoginForm'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

class App extends Component {
  componentDidMount () {
    const config = {
      apiKey: 'AIzaSyAgBN1OuDkr17w6AAoCkdegrq0ctdW56V4',
      authDomain: 'manager-1f801.firebaseapp.com',
      databaseURL: 'https://manager-1f801.firebaseio.com',
      projectId: 'manager-1f801',
      storageBucket: '',
      messagingSenderId: '177513903095'
    }
    firebase.initializeApp(config)
  }

  render () {
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
