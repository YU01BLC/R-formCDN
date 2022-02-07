import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA4HRhlRc8e9K6eqSIpzdYLDN9gR5aiWUw',
  authDomain: 'r-formcdn.firebaseapp.com',
  projectId: 'r-formcdn',
  storageBucket: 'r-formcdn.appspot.com',
  messagingSenderId: '217789887991',
  appId: '1:217789887991:web:d80244ee309fc352a86af2',
  measurementId: 'G-WJLSM58RL5',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
