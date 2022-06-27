import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Type } from 'typescript'
import useLocalStorage from '../../hooks/useLocalStorage'
import { Loader } from '../loader/Loader'
import './Basket.scss'
import { BasketEmpty } from './BasketEmpty/BasketEmpty'
import { BasketThingItem } from './basketThingItem/BasketThingItem'



const Basket = (props:any) => {
  let currentBasket = useSelector((state:any) => state.currentBasket)
  const [basket, setBasket] = useState(currentBasket)
  const [totalCount,setTotalCount] = useState(0)

  useEffect(() => {
    setBasket(currentBasket)
    if(basket.length > 0 ){
      installTotalCount(basket) 
    }

  },[currentBasket])



  
  
  const installTotalCount =(basket:Array<[]>) => {
    const values =  basket.map((item:any) =>{
      return item.value
    })
    setTotalCount(values.reduce((total:any, amount:any) => total+amount))
  }



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
            : <BasketEmpty/>
          }
        </div>
        <div className="basket__line" />
      <div className="basket_info">
          <div className="basket__tax">Tax 21%: $45</div>
          <div className="basket__quantiti">{totalCount}</div>
         <div className="basket__total">200$</div>
         <button className='basket__order-btn'>Order</button>
      </div>
    </div>
  )
}
export default Basket