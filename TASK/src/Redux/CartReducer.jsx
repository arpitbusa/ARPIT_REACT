import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  EMPTY_CART,
} from "./Constant";

import { ToastContainer, toast } from 'react-toastify';



export const cartReducer = (state = [], action) => {
  switch (action.type) {
      case ADD_TO_CART:
          {
              const added_to_cart = state.some((state) => state.id === action.payload.id)

              if (added_to_cart) {
                  toast.warn("Item already exist !");
                  return state
              } else {
                  toast.success("item add to cart !");
                  return [...state, action.payload]
              }
          }

      case REMOVE_TO_CART:

          const remove_cart_data = state.filter((state) => state.id !== action.payload.id)
          console.log('remove_cart_data from CART', remove_cart_data);

          return [...remove_cart_data];

      case EMPTY_CART:
          return state = []

      default: return state
  }
}