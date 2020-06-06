import {currencyAPI} from "../api/api";

const SET_CURRENCY = 'SET_CURRENCY'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_PAIRS = 'SET_PAIRS'
const SET_DATE = 'SET_DATE'
const SET_ADD_PAIRS_OPENED = 'SET_ADD_PAIRS_OPENED'
const SET_ALL_PAIRS_DATA = 'SET_ALL_PAIRS_DATA'
const DELETE_PAIR = 'DELETE_PAIR'

let initialState = {
    currencyData: {},
    CalculatedResult: null,
    isFetching: false,
    date: '',
    currency: ['RUB', 'USD', 'EUR', 'JPY', 'GBP', 'MYR', 'PHP', 'BRL'],
    pairsData:[
        {"FromCurrency": "RUB", "ToCurrency": "USD", "ID": 1},
        {"FromCurrency": "RUB", "ToCurrency": "EUR", "ID": 2},
    ],
    addPairsOpened: false
}

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            return {
                ...state,
                currencyData: action.currencyData
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_PAIRS:
            return {
                ...state,
                pairsData: [...state.pairsData, action.newPair]
            }
        case SET_DATE:
            return {
                ...state,
                date: action.date
            }
        case SET_ADD_PAIRS_OPENED:
            return {
                ...state,
                addPairsOpened: action.addPairsOpened
            }
        case SET_ALL_PAIRS_DATA:
            return {
                ...state,
                pairsData: [...action.pairsData]
            }
        case DELETE_PAIR:
            return {
                ...state,
                pairsData: state.pairsData.filter((item) => item.ID !== action.ID)
            }
        default:
            return state
    }
}

/*Action Creators для страницы валют*/

export const setLocalStoragePairsData = (pairsData) => ({
    type: SET_ALL_PAIRS_DATA,
    pairsData
})

export const setCurrencyData = (currencyData) => ({
    type: SET_CURRENCY,
    currencyData
})

export const setPair = (newPair) => ({
    type: SET_PAIRS,
    newPair
})

const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})
const setDate = (date) => ({
    type: SET_DATE,
    date
})

export const setAddPairsOpened = (addPairsOpened) => ({
    type: SET_ADD_PAIRS_OPENED,
    addPairsOpened
})

export const setDeletePair = (ID) => ({
    type: DELETE_PAIR,
    ID
})

/* Thunks */
export const getPairsData = (currency) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    return currencyAPI.getCurrencies(currency).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setDate(data.date))
        let result = {}
        for (let i = 0; i < currency.length; i++){
            if (currency[i] === 'EUR'){
                result[currency[i]] = 1
            } else {
                result[currency[i]] = data.rates[currency[i]]
            }
        }
        dispatch(setCurrencyData(result))
        console.log(result)
    })
}

export default currencyReducer
