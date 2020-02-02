export const addToCart =  obj  => ({
    type: 'ADD_TO_CARD',
    payload: obj
})
export const removeFromCart =  id  => ({
    type: 'REMOVE_FROM_CART',
    payload: id
})