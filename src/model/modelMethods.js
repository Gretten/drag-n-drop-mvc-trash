import { model } from './model'

let todoModel = model;

const itemExists = id => !!todoModel.find(modelItem => modelItem.id === id);

export const getTodoModel = () => todoModel;

export const setTodoItem = item => itemExists(item.id) ? model.push(item) : null;

export const deleteTodoItem = id => {
    if(itemExists(id)) {
        return todoModel = todoModel.filter(currentModelItem => currentModelItem.id !== id)
    } else {
        return null;
    }
}

export const updateTodoItem = (item) => {
    if(itemExists(item.id)) {
        todoModel = todoModel.map(currentItem => {
            return currentItem.id === item.id ? currentItem = item : currentItem
        })
    } return null;
}