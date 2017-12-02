const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const cart = ( state = [], action) => {

    const { payload, type } = action
    const movieFound = state.find( item => item.id === payload.id)

    const updateQuantity = (movie, quantity) => item => {
        if(item.id === payload.id){
            return {...payload, quantity}
        }
        return item
    }

    switch(type){
        case ADD_TO_CART:{
            let quantity = 1
            if(movieFound){
                quantity += movieFound.quantity;
                return state.map(updateQuantity(payload, quantity))
            }
            return [...state, {...payload, quantity}]
        }

        case REMOVE_FROM_CART: {
            if(movieFound){
                const quantity = movieFound.quantity - 1;
                if(quantity <= 0){
                    return state.filter(item => item.id !== payload.id)
                }
                return state.map(updateQuantity(payload, quantity))
            }
        }

        default: 
            return state
    }
}

export const removeFromCart = (movie) => {
    return {
        type: REMOVE_FROM_CART,
        payload: movie
    }
}

export const addToCart = (movie) =>{
    return {
        type: ADD_TO_CART,
        payload: movie
    }
}