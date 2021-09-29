import React from 'react'
import './Page.css'

export const Page = ({children}) => {
    return (
        <div className="pageContainer">
            <div className="todoContainer">
                {children}
            </div>
        </div>
    )
}
