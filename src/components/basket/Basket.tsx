import React, { useEffect, useState } from 'react'
import { Loader } from '../loader/Loader'
import './Basket.scss'
import { BasketThingItem } from './basketThingItem/BasketThingItem'



export const Basket = () => {
  let storage: string | null = localStorage.getItem('basket')
  const [basketThings, setBasketThings] = useState([])

useEffect((()=>{
  if(storage){
    setBasketThings(JSON.parse(storage))
  }
}),[])



  return (

    <div className='basket'>
        <h3 className="basket__title">CART</h3>

        <div className="basket__line" />

        <div className='basket__items'>
        { (basketThings.length > 0)
             ? basketThings.map((basketThing:any, index:number) => {
                return  <BasketThingItem 
                key={index} 
                basketThing={basketThing}  
                storage={storage}
                
                />})
            : <div>Товаров нет</div>
          
          }
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
