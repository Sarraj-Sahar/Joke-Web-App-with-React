import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./LoginSlice";
export default configureStore({
  reducer: {
    loggedIn: loginReducer,
  },
});
