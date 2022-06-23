import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Type } from 'typescript'
import { Loader } from '../loader/Loader'
import './Basket.scss'
import { BasketThingItem } from './basketThingItem/BasketThingItem'



const Basket = () => {
  let currentBasket = useSelector((state:any) => state.currentBasket)
  const currency = useSelector((state:any) => state.currentCurrency.currentCurrency)
  const [totalPrice, setTotalPrice] = useState(0)
  const [basket, setBasket] = useState(currentBasket)
  

  useEffect(() => {
    setBasket(currentBasket)
    
  },[currentBasket])


  console.log(basket.map((item:any) => {
      return item.data.product.prices
  }))
  


  return (

    <div className='basket'>
        <h3 className="basket__title">CART</h3>
        <div className="basket__line" />
        <div className='basket__items'>
        { (basket.length > 0)
             ? basket.map((currentBasketItem:any, index:number) => {
                return  <BasketThingItem 
                key={index} 
                currentBasketID={currentBasketItem.key}
                count ={currentBasketItem.value}
                selectAttributes={currentBasketItem.selectAttributes}
                product={currentBasketItem.data}
                />})
            : <div>Basket empty</div>
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
export default Basket