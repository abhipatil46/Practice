import React from 'react'
import { useState } from 'react'

const Counter = () => {

    let [count, setCount] = useState(0);
 

    let Add = () => {
        setCount(count += 1)
    }

    let Sub = () => {
        setCount(count -= 1)
    }

    return (
        <div className='container m-5'>
            <div>
                <button onClick={Add}>+</button>
                <span>{count}</span>
                <button onClick={Sub}>-</button>
            </div>

        </div>
    )
}

export default Counter