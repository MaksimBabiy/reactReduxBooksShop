const initialState = {
    items: []
};

export default (state = initialState, action) => {
 
    switch (action.type) {
        case 'ADD_TO_CARD':
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(c => c.id !== action.payload )
            };
        default:
            return state
    }
}