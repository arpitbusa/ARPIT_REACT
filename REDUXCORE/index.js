const redux = require('redux')
const createStore = redux.createStore
const {combineReducers} = require('redux')
const {applyMiddleware} = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

/* constant */

const BUY_CHOCOLATE = 'BUY_CHOCOLATE'
const BUY_CAKE = 'BUY_CAKE'
const BUY_PIZZA = 'BUY_PIZZA'
const BUY_MAGGI = 'BUY_MAGGI'
const BUY_CANDY = 'BUY_CANDY'
const BUY_COKE = 'BUY_COKE'

/* REDUX ACTION */

function buy_chocolate(){
    return{
        type:BUY_CHOCOLATE,
        info:'first redux action'
    }
}
function buy_cake(){
    return{
        type:BUY_CAKE,
        info:'second redux action'
    }
}
function buy_pizza(){
    return{
        type:BUY_PIZZA,
        info:'third redux action'
    }
}
function buy_maggi(){
    return{
        type:BUY_MAGGI,
        info:'four redux action'
    }
}
function BUY_candy(){
    return{
        type:BUY_CANDY,
        info:'five redux action'
    }
}
function BUY_coke(){
    return{
        type:BUY_COKE,
        info:'six redux action'
    }
}

/* initialState for redux */

const initialState = {
    NumOfChocolate : 20,
    NumOfCake : 30,
    NumofPizza : 15,
    Numofmaggi :25,
    Numofcandy :35,
    Numofcoke :29,
}

/* Redux Reducer */

const ChocoReducer = (state = initialState , action) => {
 switch(action.type){
    case BUY_CHOCOLATE : return{
        ...state,
        NumOfChocolate:state.NumOfChocolate - 1
    }
    case BUY_CAKE : return{
        ...state,
        NumOfCake:state.NumOfCake - 1
    }
    case BUY_PIZZA : return{
        ...state,
        NumofPizza:state.NumofPizza - 1
    }
    case BUY_MAGGI : return{
        ...state,
        Numofmaggi:state.Numofmaggi - 1
    }
    case BUY_CANDY : return{
        ...state,
        Numofcandy:state.Numofcandy - 1
    }
    default:return state
 }
}

const CakeReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            NumOfCake:state.NumOfCake - 1
        }
        default:return state
    }
}

const PizzaReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_PIZZA : return{
            ...state,
            NumofPizza:state.NumofPizza - 1
        }
        default:return state
    }
}

const MaggiReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_MAGGI : return{
            ...state,
            Numofmaggi:state.Numofmaggi - 1
        }
        default:return state
    }
}

const CandyReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CANDY : return{
            ...state,
            Numofcandy:state.Numofcandy - 1
        }
        default:return state
    }
}

const CokeReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_COKE : return{
            ...state,
            Numofcoke:state.Numofcoke - 1
        }
        default:return state
    }
}

/* redux store */

const rootReducer = combineReducers({

    ChocoReducer,
    CakeReducer,
    PizzaReducer,
    MaggiReducer,
    CandyReducer,
    CokeReducer
})


const store = createStore(rootReducer , applyMiddleware(logger))

console.log(store.getState());

const unsubscribe  =  store.subscribe(() => console.log(store.getState()))

store.dispatch(buy_chocolate())
store.dispatch(buy_cake())
store.dispatch(buy_pizza())
store.dispatch(buy_maggi())
store.dispatch(BUY_candy())
store.dispatch(BUY_coke())

unsubscribe()