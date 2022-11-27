import { createSlice } from '@reduxjs/toolkit'

export const loggedIn = createSlice({
  name: 'loggedIn',
  initialState: {
    value: true,
  },
  reducers: {
    logIn: (state) => {
      state.value = true
    },
    logOut: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { logIn,logOut } = loggedIn.actions

export default loggedIn.reducer