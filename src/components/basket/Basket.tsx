import React, { useState } from 'react'
import BasketLogo from '../../assets/img/shoping_list.png'
import './Basket.scss'
import BasketItem from './basketItem/BasketItem';

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
    <div className='busket'>
        <div className='busket__header' onClick={handleClick}>
            <div className="busket__count">3</div>
            <img src={BasketLogo} alt="Basket Logo" />
        </div>
        <div className={isActive ? 'busket__body isActive': 'busket__body'} >
            <div className="busket__title">My Bag, {bagCount} items</div>
           <BasketItem/>
           <BasketItem/>

           <div className="busket__price">
                <div className="busket__price-title">Total</div>
                <div className="busket__price-count">200.00$</div>
           </div>

           <div className="busket__btns">
                <div className="busket__btn">Viev bag</div>
                <div className="busket__btn">Check Out</div>
           </div>
        </div>
    </div>
  )
}
