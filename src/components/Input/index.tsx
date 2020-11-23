import React, { FC, useState, useEffect, useRef, useCallback, MutableRefObject, useReducer } from 'react'
import './index.less'

type Input = {
    value: string
    change:(e: string,) => void
}

const Input: FC<Input> = (props) => {
    let { value,change } = props
   
    const inputChange = (e) => {
        change(e.target.value)
    }

    return (
        <div className='input-container'>
            <input type="text" value={value} onChange={(e) => { inputChange(e) }} />
        </div>
    )

}

export default Input