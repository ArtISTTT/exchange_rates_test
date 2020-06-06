const SET_BURGER_STATUS = 'SET_BURGER_STATUS'

let initialState = {
    status: false

}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BURGER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

/*Action Creators для страницы валют*/
export const setBurgerStatus = (status) => ({
    type: SET_BURGER_STATUS,
    status
})

export default headerReducer
