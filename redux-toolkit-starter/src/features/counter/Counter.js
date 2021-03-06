import React, { useState } from 'react'
import './Counter.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from 'src/features/counter/counterReducer'
import { SubHeading } from 'src/components/Heading'
import { type IRootState } from 'src/store'

export default function Counter() {
  const counter = useSelector((state: IRootState) => state.counter)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(1)

  return (
    <div className={'counter'}>
      <SubHeading>counter</SubHeading>
      <p>
        <b>{counter}</b>
      </p>
      <div>
        <button onClick={() => dispatch(decrement(amount))}>decrement</button>
        <button onClick={() => dispatch(increment(amount))}>increment</button>

        <div>
          <label htmlFor="">amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={e => setAmount(parseInt(e.target.value, 10))}
          />
        </div>
      </div>
    </div>
  )
}
