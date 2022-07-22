import postReducer from "./reducers/postReducer";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        posts:postReducer,
    }
  })
  
  export default store;