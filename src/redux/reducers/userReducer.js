import { createReducer } from '@reduxjs/toolkit'


const initialState = {
    loading : false,
    users : [],
    err : ""
}
export const userReducer = createReducer(initialState, (builder)=>{

    builder.addCase("userRequest", (state, action)=>{
        state.loading = true;
    }).addCase("userSuccess", (state, action) =>{
        state.loading = false;
        state.users = action.payload;
    }).addCase("userFailure", (state, action) =>{
        state.loading = false;
        state.err = action.message
    })

})