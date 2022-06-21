import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import BasketLogo from '../../../assets/img/shoping_list.png'
import { BasketThingItem } from '../basketThingItem/BasketThingItem';
import './BasketBox.scss'

export default function Basket() {
    const [bagCount, setBagCount] = useState(0)
    const [isActive ,setIsActive] = useState(false)



    useEffect((()=>{
      let storage: string | null = localStorage.getItem('basket')
        if(storage){
          currentBagCount(JSON.parse(storage))
        }
      }),[])

    function handleClick() {
        setIsActive(!isActive)
    }

   function currentBagCount(basket:any){
    let count = 0
    basket.map((item:any) => {
      count= count + item.count
    })
    setBagCount(count)
   }
    
 
  return (
    <div className='busketBox'>
        <div className='busketBox__header' onClick={handleClick}>
           {bagCount > 0 ? <div className="busketBox__count">{bagCount}</div> : null}
            <img src={BasketLogo} alt="Basket Logo" />
        </div>
        <div className={isActive ? 'busketBox__body isActive': 'busketBox__body'} >
            <div className="busketBox__title">My Bag, {bagCount} items</div>

            <div className='busketBox__items'>
           
          </div>

           <div className="busketBox__price">
                <div className="busketBox__price-title">Total</div>
                <div className="busketBox__price-count">200.00$</div>
           </div>

           <div className="busketBox__btns">
                <div className="busketBox__btn">
                    <NavLink to={`/basket`}>
                         viev bag
                    </NavLink> </div>
                <div className="busketBox__btn">Check Out</div>
           </div>
        </div>
    </div>
  )
}
