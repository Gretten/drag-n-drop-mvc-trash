import { model } from './model'

let [...currentModel] = model;

const itemExists = id => !!currentModel.find(modelItem => modelItem.id === id);

export const getModel = () => currentModel;

export const setItem = item => itemExists(item.id) ? model.push(item) : null;

export const deleteItem = id => {
    if(itemExists(id)) {
        return currentModel = currentModel.filter(currentModelItem => currentModelItem.id !== id)
    } else {
        return null;
    }
}

export const updateItem = (item) => {
    if(itemExists(item.id)) {
        currentModel = currentModel.map(currentItem => {
            return currentItem.id === item.id ? currentItem = item : currentItem
        })
    } return null;
}