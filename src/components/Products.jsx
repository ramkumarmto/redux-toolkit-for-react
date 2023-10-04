import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';

function Products() {
    const dispatch = useDispatch();
    const { products, Loading } = useSelector((state) => state.products)

    console.log("in product comp",  products, Loading)
    useEffect(()=>{
        dispatch(getAllProducts()) // dispatch redux  thunk

    }, [])
  return (
    <div>Products</div>
  )
}

export default Products