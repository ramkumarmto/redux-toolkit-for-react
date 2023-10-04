import { createSlice} from "@reduxjs/toolkit";


const productSlice = createSlice({
    name : "products",
    initialState : { "products" : [], "Loading" : false },
    reducers : {
        getProducts : (state, action)=>{
            state.products = action.payload.products
        },
        setLoader : (state, action)=>{
            state.Loading = action.payload;
        }
    }
})


export const productAction = productSlice.actions;
export const productReducer = productSlice.reducer;

export const getAllProducts = ()=>{
    return async (dispatch) =>{
        // dispatch()
      dispatch(productAction.setLoader(true))

        const fetchProducts = async()=>{
          const response =  await fetch('https://dummyjson.com/products');
          const result = await response.json();
          return result;

        }
        try{
           const product = await fetchProducts();
           dispatch(productAction.getProducts(product))
           dispatch(productAction.setLoader(false))
        //    dispatch(productAction.getProducts())
        }catch(err){
            // dispatch()
            dispatch(productAction.setLoader(false))
            console.log("ERROR")
        }

    }

}