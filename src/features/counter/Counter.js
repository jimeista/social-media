import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCounter,
  incrementByAmount,
  increment,
  incrementAsync,
  decrement,
} from './counterSlice'

export const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCounter)

  return (
    <div>
      <h3>{count}</h3>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>
        {' '}
        increment by 4
      </button>
      <button onClick={() => dispatch(incrementAsync(4))}>
        async increment
      </button>
    </div>
  )
}
