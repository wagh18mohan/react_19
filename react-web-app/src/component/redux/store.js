
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slice';  //counterSlice we can writ any name here add same in counter.

export default configureStore({
   reducer: {
    counter: counterSlice,
  },
})