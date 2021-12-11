import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from '@firebase/auth'
import Swal from 'sweetalert2'
import { googleAuthProvider } from '../firebase/firebase-config'
import { types } from '../types/types'
import { FinishLoading, StartLoading } from './ui'

export const startLoginEmailPassword = (email, password) => {
  return dispatch => {
    const auth = getAuth()

    dispatch(StartLoading())
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
        dispatch(FinishLoading())
      })
      .catch(e => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'There is no user record corresponding to this identifier. The user may have been deleted.'
        })
        dispatch(FinishLoading())
      })
  }
}

export const startRegisterWithEmailPasswordName = (name, email, password) => {
  return dispatch => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: name })

        dispatch(login(user.uid, user.displayName))
      })
      .catch(e => {
        console.log(e)
      })
  }
}

export const startGoogleLogin = () => {
  return dispatch => {
    const auth = getAuth()
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName))
    })
  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    name: displayName
  }
})

export const startLogout = () => {
  return async dispatch => {
    const auth = getAuth()
    await signOut(auth)
    dispatch(logout())
  }
}

export const logout = () => ({
  type: types.logout
})
