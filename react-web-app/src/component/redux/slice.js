
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 100,
    counter:10,
    name:'Raj'
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    updateName: (state, action) => {
    //   state.value += action.payload
    // state.name = 'mohan';
    console.log(action);
    state.name = action.payload; // inside action we have payload parameter or key
    },
  },
})

//second slice

// export const userProfileUpdate = createSlice({
//   name: 'profileUpdating',  // this name only for referce of which slice it will come .
//   initialState: {
//     value: 100,
//     counter:10,
//     name:'Raj'
//   },
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     updateName: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

console.log(counterSlice);
// console.log(userProfileUpdate);

// Action creators are generated for each case reducer function
export const { increment, decrement, updateName } = counterSlice.actions;

export default counterSlice.reducer;

// if uou have multiple slice in sigle file genarlly we creat single slice file for eace slice.

// the writ follwing way, import it in stor {useReducers,useReducers2  }

// export var useReducers = counterSlice.reducer;
// export var useReducers2 = userProfileUpdate.reducer;