import { Type } from "typescript"

const SET_CURENT_BASKET = 'SET_CURENT_BASKET'



export default function CurrentBasket(state:any=[], action:any) {

    
    switch (action.type) {
        case SET_CURENT_BASKET: return action.payload

        default:
            return state
    }
}

export const changeBasket = (value:any) => ({ type: SET_CURENT_BASKET, payload: value })

