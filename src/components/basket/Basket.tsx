import React from 'react'
import './Basket.scss'
import { BasketThingItem } from './basketThingItem/BasketThingItem'



export const Basket = () => {
  return (
    <div className='basket'>
        <h3 className="basket__title">CART</h3>
        <div className="basket__line" />

        <BasketThingItem/>

        <div className="basket__line" />

    <div className="basket_info">
         <div className="basket__tax">Tax 21%: $45</div>
         <div className="basket__quantiti">3</div>
        <div className="basket__total">200$</div>
        <button className='basket__order-btn'>Order</button>
    </div>
    


    </div>
  )
}
