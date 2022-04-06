import { configureStore } from "@reduxjs/toolkit"

import authSlice from './auth/authSlice'



export default configureStore({
  reducer: {
    user: authSlice.reducer
  },
})