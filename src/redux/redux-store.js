import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";
import currencyReducer from "./currency-reducer";
import calculatorReducer from "./calculator-reducer";
import headerReducer from "./header-reducer";

let reducers = combineReducers({
    header: headerReducer,
    currencyPage: currencyReducer,
    calculateorPage: calculatorReducer,
    app: appReducer,
    form: formReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store
