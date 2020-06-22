const SET_CALCULATE_RESULT = 'SET_CALCULATE_RESULT'

let initialState = {
    result: 100
}

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CALCULATE_RESULT:
            return {
                ...state,
                result: action.result
            }
        default:
            return state
    }
}

/*Action Creators для страницы валют*/
export const setCalculateResult = (result) => ({
    type: SET_CALCULATE_RESULT,
    result
})



export default calculatorReducer
