import {getPairsData} from "./currency-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

/*Данные для пользователей*/
let initialState = {
    initialized: false
}

/*Возможные действие на странице пользователей и их логика*/
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}


/*Action Creators для пользователя*/
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

/*Thunks*/
export const initializeApp  = (currency) => (dispatch) => {
    let promise = dispatch(getPairsData(currency))
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer
