import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import BasketLogo from '../../../assets/img/shoping_list.png'
import { BasketThingItem } from '../basketThingItem/BasketThingItem';
import './BasketBox.scss'

export default function Basket() {

    let storage: string | null = localStorage.getItem('basket')
    const [basketThings, setBasketThings] = useState([])
    const [bagCount, setBagCount] = useState(3)
    const [selectedOption, setSelectedOption] = useState('$');
    const [isActive ,setIsActive] = useState(false)

    useEffect((()=>{
        if(storage){
          setBasketThings(JSON.parse(storage))
        }
      }),[])

    function handleClick() {
        setIsActive(!isActive)
    }

    function onOptionClicked (value:any)  {
        setSelectedOption(value);
        setIsActive(!isActive);
      };

 
  return (
    <div className='busketBox'>
        <div className='busketBox__header' onClick={handleClick}>
            <div className="busketBox__count">3</div>
            <img src={BasketLogo} alt="Basket Logo" />
        </div>
        <div className={isActive ? 'busketBox__body isActive': 'busketBox__body'} >
            <div className="busketBox__title">My Bag, {bagCount} items</div>

            <div className='busketBox__items'>
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
