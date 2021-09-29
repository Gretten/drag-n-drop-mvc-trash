import React, { useState } from 'react'
import './SingleTodo.css'

export const SingleTodo = ({params}) => {
    const {title, id} = params
    const [isChecked, setIsChecked] = useState(false)

    const checkboxHandler = () => setIsChecked(!isChecked);

    return (
        <div class="singleTodo">
            <label class="container">
                <span className={isChecked ? 'isChecked' : 'isNotChecked'}>{title}</span>
                <input 
                        type="checkbox" 
                        name={title} 
                        id={id}
                        checked={isChecked}
                        onChange={checkboxHandler}
                    />
                    <span class="checkmark"></span>
                </label>
        </div>
    )
}
