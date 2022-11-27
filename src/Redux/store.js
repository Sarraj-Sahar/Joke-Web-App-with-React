import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../Components/LoginSlice'

export default configureStore({
  reducer: {
    loggedIn: loginReducer,
  },
})