import React from 'react'
import * as modelMethods from '../../model/modelMethods'

const item = {id: 4, title: 'Сварить сосиски', checked: false }
const item2 = {id: 2, title: 'Сварить сосиски', checked: true }

export const TodoBox = () => {

   modelMethods.deleteTodoItem(2)
   console.log(modelMethods.getTodoModel())

    return (
        <div>
            
        </div>
    )
}
