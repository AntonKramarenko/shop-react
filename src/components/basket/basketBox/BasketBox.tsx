import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import BasketLogo from '../../../assets/img/shoping_list.png'
import { BasketThingItem } from '../basketThingItem/BasketThingItem';
import './BasketBox.scss'

export default function Basket() {

    const [bagCount, setBagCount] = useState(3)
    const [selectedOption, setSelectedOption] = useState('$');
    const [isActive ,setIsActive] = useState(false)

    const options =[
        { symbol: '$' , value: 'USD'  },
        { symbol: "£" , value: 'GBP'  },
    ]

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

            <BasketThingItem/>

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
