import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import postReducer from '../features/auth/post/postSlice'
import friendsReducer from '../features/auth/friends/friendsSlice'
import cafteriaReducer from '../features/auth/cafteria/cafteriaSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    friends: friendsReducer,
    cafteria: cafteriaReducer,
  },
})