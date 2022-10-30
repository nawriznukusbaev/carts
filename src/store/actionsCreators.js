export const add = (id) => {
    return {
        type: 'Action.Increase',
        id: id
    }
}
export const decrease = (id) => {
    return {
        type: 'Action.Decrease',
        id: id
    }
}
export const remove = (id) => {
    return {
        type: 'Action.Remove',
        id:id
    }
}
export const totalCount = (arr) => {
    return arr.reduce((prevCount, currentItem) => prevCount + currentItem.count, 0);
}
export const totalPrice = (arr) => {
    return arr.reduce((prevSum, currentItem) => prevSum + (currentItem.count * currentItem.price), 0);
}
