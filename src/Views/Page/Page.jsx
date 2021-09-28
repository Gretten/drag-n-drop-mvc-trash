import React from 'react'
import './Page.css'

export const Page = ({children}) => {
    return (
        <div class="page-container">
            <div class="todo-container">
                {children}
            </div>
        </div>
    )
}
