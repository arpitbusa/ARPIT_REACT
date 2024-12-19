import React from 'react'
import { cartReducer} from './CartReducer'
import { wishlistReducer } from './WishlistReducer'
import { productReducer } from './ProductReducer'
import { combineReducers } from 'redux'


const RootReducer = combineReducers({
    cart: cartReducer,
    wishlist: wishlistReducer,
    product: productReducer
})



export default RootReducer