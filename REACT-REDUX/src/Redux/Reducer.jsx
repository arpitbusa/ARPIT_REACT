import { BUY_CHOCO } from "./Constant";
import { BUY_CAKE } from "./Constant";

let initialvaluechoco = {
    numofchoco :0
}

let initialvaluecake = {
    numofcake :0
}

export const chocoReducer = ( state = initialvaluechoco , action) => {
    switch(action.type){
        case BUY_CHOCO:
            console.log('ChocoReducer called');
            return {
                ...state,
                numofchoco:state.numofchoco + 1
            }
            default: return state
    }
}

export const cakeReducer = ( state = initialvaluecake , action) => {
    switch(action.type){
            case BUY_CAKE:
            console.log('CakeReducer called');
            return {
                ...state,
                numofcake:state.numofcake + 1
            }
            default: return state
    }
}