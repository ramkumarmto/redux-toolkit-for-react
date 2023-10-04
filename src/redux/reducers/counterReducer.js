import { createAction, createReducer } from "@reduxjs/toolkit";
import { increment, decrement, incrementByAmount, reset} from  "../actions/counterActions";



const initialState = {
  count: 0,
};
 export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.count = state.count + 1;
    })
    .addCase(decrement, (state, action) => {
      state.count = state.count - 1;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.count = state.count + action.payload;
    })
    .addCase(reset, (state, action) => {
      state.count = 0;
    }).addDefaultCase(( state, action) =>{
        state;
    })
});
