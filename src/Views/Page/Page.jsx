import React from 'react'
import './Page.css'

export const Page = ({children}) => {
    return (
        <div className="page-container">
            <div className="todo-container">
                {children}
            </div>
        </div>
    )
}
