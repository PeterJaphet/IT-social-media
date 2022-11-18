import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import postReducer from '../features/auth/post/postSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
})