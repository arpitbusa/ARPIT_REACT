import {
   ADD_TO_WISHLIST,
   REMOVE_TO_WISHLIST,
   EMPTY_WISHLIST,
   WISHLIST_TO_CART,
   CART_TO_WISHLIST
} from "./Constant";

import { ToastContainer, toast } from 'react-toastify';

const initialState = {
   productWish: [],
   cartWish: []
}

export const wishlistReducer = (state = initialState, action) => {
   switch (action.type) {

       case ADD_TO_WISHLIST:
           {
               const added_to_product_wish = state.productWish.some((state) => state.id === action.payload.id)

               if (added_to_product_wish) {
                   toast.warn("Item already exist !");
                   return state
               } else {
                   toast.success("item add to cart !");

                   return {
                       ...state,
                       productWish: [...state.productWish, action.payload],
                   }
               }
           }

       case CART_TO_WISHLIST:
           {
               const added_to_cart_wish = state.cartWish.some((state) => state.id === action.payload.id)

               if (added_to_cart_wish) {
                   toast.warn("Item already exist !");
                   return state
               } else {
                   toast.success("item add to cart !");

                   return {
                       ...state,
                       cartWish: [...state.cartWish, action.payload]
                   }
               }
           }

       case REMOVE_TO_WISHLIST:

           const remove_wishlist_data_cart = state.cartWish.filter((state) => state.id !== action.payload.id)
           const remove_wishlist_data_product = state.productWish.filter((state) => state.id !== action.payload.id)
           console.log('remove_wishlist_data from CART', remove_wishlist_data_cart);
           console.log('remove_wishlist_data from Product', remove_wishlist_data_product);

           return {
               cartWish: [...remove_wishlist_data_cart],
               productWish: [...remove_wishlist_data_product]
           }

       case EMPTY_WISHLIST:
           return state = initialState

       case WISHLIST_TO_CART:
           return {

           }

       default: return state
   }
}
