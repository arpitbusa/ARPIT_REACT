import { chocoReducer , cakeReducer } from "./Reducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    chocos:chocoReducer,
    cakes:cakeReducer
})

export default RootReducer