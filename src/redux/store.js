import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './slices/productSlice';
import { counterReducer} from './reducers/counterReducer'



export const store = configureStore({
    reducer : {
        products : productReducer,
        counter : counterReducer,
        // all reducers will be here 
    }
})