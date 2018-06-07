import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAgBN1OuDkr17w6AAoCkdegrq0ctdW56V4',
  authDomain: 'manager-1f801.firebaseapp.com',
  databaseURL: 'https://manager-1f801.firebaseio.com',
  projectId: 'manager-1f801',
  storageBucket: '',
  messagingSenderId: '177513903095'
}
firebase.initializeApp(config)

export { firebase }
