import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCgpL0L81qRJvatQP3qTRlRbf-t_XIn5ds',
  authDomain: 'react-app-ae903.firebaseapp.com',
  projectId: 'react-app-ae903',
  storageBucket: 'react-app-ae903.appspot.com',
  messagingSenderId: '593335180262',
  appId: '1:593335180262:web:63eccbb92a6a6da7201427'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()

const googleAuthProvider = new GoogleAuthProvider()

export { db, googleAuthProvider }
