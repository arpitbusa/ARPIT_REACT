import {ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART,CART_TO_WISHLIST} from "./Constant";
import { toast } from 'react-toastify';

const initialstate = {
  CartData : [],
  CartWish : []
}

export const cartReducer = (state = initialstate, action) => {
  switch (action.type) {
      case ADD_TO_CART:
        // return{CartData:[...state.CartData , action.payload]}
        console.log("cartReducer called");
          {
              const added_to_cart = state.CartData.some((CartData) => CartData.id === action.payload.id)
              console.log("added_to_cart" , added_to_cart);
              
              if (added_to_cart) {
                  toast.warn("Item already exist !"); 
                  return state.CartData
              } else {
                  toast.success("item add to cart !");
                  return{CartData:[...state.CartData , action.payload]}
              }
          }

          case REMOVE_TO_CART:
                  toast.success('Remove Item')
                  const remove_cart = state.filter((state) => state.id !== action.payload.id)
                  console.log("remove_to_cart" , remove_cart);
                  return [...remove_cart]

      case EMPTY_CART:
          return state = []

      case CART_TO_WISHLIST:
                 {
                     const cart_to_wishlist = state.CartWish.some((CartWish) => CartWish.id === action.payload.id)
      
                     if (cart_to_wishlist) {
                         toast.warn("Item already exist !");
                         return state.CartWish
                     } else {
                         toast.success("item add to wishlist !");
      
                         return { 
                             cartWish: [...state.CartWish, action.payload]
                         }
                     }
                 }

      default: return state
  }
}