import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './slices/productSlice';
import { counterReducer} from './reducers/counterReducer'
import { userReducer} from "./reducers/userReducer"



export const store = configureStore({
    reducer : {
        products : productReducer,
        counter : counterReducer,
        users : userReducer
        // all reducers will be here 
    }
})