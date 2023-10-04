import React from 'react'
import { increment, decrement, reset, incrementByAmount } from '../redux/actions/counterActions'
import { useDispatch, useSelector } from 'react-redux'
function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter.count);

    // console.log(counter)
    const incHandler = () => {
        dispatch(increment())
    }
    const decHandler = () => {
        dispatch(decrement())
    }
    const IncByAmountHandler = () => {
        dispatch(incrementByAmount(10))
    }
    const resetHandler = () => {
        dispatch(reset())
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={incHandler}>Inc</button>
            <button onClick={decHandler}>Dec</button>
            <button onClick={IncByAmountHandler} >IncByAmount</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    )
}

export default Counter