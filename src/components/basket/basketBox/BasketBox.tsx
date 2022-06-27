import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Type } from 'typescript';
import BasketLogo from '../../../assets/img/shoping_list.png'
import useLocalStorage from '../../../hooks/useLocalStorage';
import { changeBasketIsActive } from '../../../reducers/currentBackground';
import { changeBasket } from '../../../reducers/currentBasket';
import { BasketThingItem } from '../basketThingItem/BasketThingItem';
import './BasketBox.scss'

export default function Basket() {
    let currentBasket = useSelector((state:any) => state.currentBasket)
    const currentIsActiveBackground = useSelector((state: any) => state.currentBackground.basket)
    const storage = useLocalStorage().getStorage()
    const dispatch = useDispatch()
    const [bagCount, setBagCount] = useState(0)
    const [isActive ,setIsActive] = useState(currentIsActiveBackground)
    const [basket, setBasket] = useState(currentBasket)

  
   


  useEffect(() => {

    if(storage){
      dispatch(changeBasket(storage))
      getBagCount(storage) 
    }

    if(currentBasket){
      setBasket(currentBasket)
    }

    setIsActive(currentIsActiveBackground)
 
    
  },[bagCount,currentIsActiveBackground])


  
  function handleClick() {
      setIsActive(!isActive)
      dispatch(changeBasketIsActive())
   }


function getBagCount(items:Array<Type>){
  let count = 0
  items.forEach((item:any) => {
    count += item.value
  })
  setBagCount(count);
}


console.log(currentIsActiveBackground);


 
  return (
    <div className='busketBox'>
        <div className='busketBox__header' onClick={handleClick}>
           {bagCount > 0 ? <div className="busketBox__count">{bagCount}</div> : null}
            <img src={BasketLogo} alt="Basket Logo" />
        </div>
        <div className={isActive ? 'busketBox__body isActive': 'busketBox__body'} >
            <div className="busketBox__title">My Bag, {bagCount} items</div>

            <div className='busketBox__items'>
           
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


           <div className="busketBox__price">
                <div className="busketBox__price-title">Total</div>
                <div className="busketBox__price-count">200.00$</div>
           </div>

           <div className="busketBox__btns">
                <div className="busketBox__btn" onClick={handleClick}>
                    <NavLink 
                      to={`/basket`}
                    >
                      
                         viev bag
                    </NavLink> </div>
                <div className="busketBox__btn">Check Out</div>
           </div>
        </div>
    </div>
  )
}
