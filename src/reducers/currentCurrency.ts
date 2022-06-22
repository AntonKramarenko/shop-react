const SET_CURENT_CURRENTCY = 'SET_CURENT_CURRENTCY'


const defaultState = {
    currentCurrency: { symbol: '$' , label: 'USD'}
}

export default function CurrentCurrency(state:any = defaultState, action:any) {
    

    switch (action.type) {
        case SET_CURENT_CURRENTCY: return {currentCurrency: action.payload}
        
        default:
            return state
    }
}


export const changeCurrency = (currency:any) => ({ type: SET_CURENT_CURRENTCY, payload: currency })

