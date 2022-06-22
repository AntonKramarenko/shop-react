import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Loader } from '../loader/Loader'
import './Basket.scss'
import { BasketThingItem } from './basketThingItem/BasketThingItem'



const Basket = (props:any) => {

  const currentBasketRedux = useSelector((state:any) => state.currentBasket)

  console.log(currentBasketRedux)

  return (

    <div className='basket'>
        <h3 className="basket__title">CART</h3>
        <div className="basket__line" />
        <div className='basket__items'>
        {/* { (basketThings.length > 0)
             ? basketThings.map((basketThing:any, index:number) => {
                return  <BasketThingItem 
                key={index} 
                basketThingID={basketThing.key}
                count ={basketThing.count}
                selectAttributes={basketThing.selectAttributes}
                product={basketThing.product}
               
                />})
            : <div>Товаров нет</div>
          } */}
        </div>
        
      
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
export default Basket