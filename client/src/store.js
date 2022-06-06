import {legacy_createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllPizaaReducer} from './reducers/pizzaReducer'
import { cartReducer } from './reducers/cartReducer'

const cartItems=localStorage.getItem('cartItems')
?JSON.parse(localStorage.getItem('cartItems'))
:[];

const rootReducer= combineReducers({
    getAllPizaaReducer:getAllPizaaReducer,
    cartReducer:cartReducer
});


const initialState={
    cartReducer:{
        cartItems:cartItems,
    }

}
const middleware=[thunk]
//create store 

const store=legacy_createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;