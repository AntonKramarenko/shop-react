const SET_CURENT_BASKET = 'SET_CURENT_CURRENTCY'

const defaultState = {}

export default function CurrentBasket(state:any = defaultState, action:any) {
    

    switch (action.type) {
        case SET_CURENT_BASKET: return [{currentBasket: action.payload}]

        default:
            return state
    }
}


export const changeBasket = (value:any) => ({ type: SET_CURENT_BASKET, payload: value })

