import {ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART} from "./Constant";
import { toast } from 'react-toastify';

const initialstate = {
  CartData : [],
  CartWish : []
}

export const cartReducer = (state = initialstate, action) => {
  switch (action.type) {
      case ADD_TO_CART:
        console.log("cartReducer called");
          {
              const added_to_cart = state.CartData.some((CartData) => CartData.id === action.payload.id)
              console.log("added_to_cart" , added_to_cart);
              
              if (added_to_cart) {
                  toast.warn("Item already exist !");
                  return CartData
              } else {
                  toast.success("item add to cart !");
                  return [...state.CartData , action.payload]
              }
          }

      case REMOVE_TO_CART:
        toast.success('Remove Item')
        const remove_cart = state.filter((state) => state.id !== action.payload.id)
        console.log("remove_to_cart" , remove_cart);
        return [...remove_cart]

      case EMPTY_CART:
          return state = []

      default: return state
  }
}