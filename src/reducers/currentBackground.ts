const SET_CURENT_ACTIVE_CURRENCY = 'SET_CURENT_ACTIVE_CURRENCY'
const SET_CURENT_ACTIVE_BASKET = 'SET_CURENT_ACTIVE_BASKET'
const SET_CURENT_ACTIVE_ALL = 'SET_CURENT_ACTIVE_ALL'


const defaultState = {
    currency: false,
    basket: false
}



export default function CurrentBackground(state = defaultState, action:any) {

    
    switch (action.type) {
        case SET_CURENT_ACTIVE_CURRENCY: return {
            currency: !state.currency,
            basket: state.basket
        }
        case SET_CURENT_ACTIVE_BASKET: return {
            currency: state.currency,
            basket: !state.basket
        }
        case SET_CURENT_ACTIVE_ALL: return defaultState

        default:
            return state
    }
}

export const changeCurrencyIsActive = () => ({ type: SET_CURENT_ACTIVE_CURRENCY })
export const changeBasketIsActive= () => ({ type: SET_CURENT_ACTIVE_BASKET })
export const changeIsActiveAll= () => ({ type: SET_CURENT_ACTIVE_ALL })

