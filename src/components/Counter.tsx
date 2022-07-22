import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { decrement, increment, selectCount } from '../redux/slices/counterSlice'

const Counter: FC = () => {
    const dispatch = useAppDispatch()
    const counter = useAppSelector(selectCount)

    const handleClick = (sign: string) => {
        if (sign === '+') dispatch(increment())
        if (sign === '-') dispatch(decrement())
    }

    return (
        <div>
            <div style={{
                fontSize: '36px',
                margin: '50px'
            }}>
                Counter
            </div>
            <div style={{
                display: 'flex',
                margin: 'auto',
                width: 'max-content'
            }}>
                <button onClick={() => handleClick('+')}>+</button>
                <div style={{
                    margin: '20px'
                }}>{counter}</div>
                <button onClick={() => handleClick('-')}>-</button>
            </div>
        </div>
    )
}

export default Counter