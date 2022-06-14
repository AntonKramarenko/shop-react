import React, { useState } from 'react'
import './SelectCurrency.scss'

export default function SelectCurrency() {

    const [selectedOption, setSelectedOption] = useState('$');
    const [isActive ,setIsActive] = useState(false)

    const options =[
        { symbol: '$' , value: 'USD'  },
        { symbol: "£" , value: 'GBP'  },
        { symbol: 'A$' , value: 'AUD'  },
        { symbol: '¥' , value: 'JPY'  },
        { symbol: '₽' , value: 'RUB'  }
    ]

    function handleClick() {
        setIsActive(!isActive)
    }

    function onOptionClicked (value:any)  {
        setSelectedOption(value);
        setIsActive(!isActive);
      };

 
  return (
    <div className='selectCurrency'>
        <div className='selectCurrency__header' onClick={handleClick}>
            <span className='selectCurrency__current '>{selectedOption}</span>
            <div className='selectCurrency__icon'>&or;</div>
        </div>
        <div className={isActive ? 'selectCurrency__body isActive': 'selectCurrency__body'} >
            
            { options.map((item,index) => {
            return (
                 <span 
                 className='selectCurrency__item' 
                 onClick={() => onOptionClicked(item.symbol)} 
                 key={index}
                 >{item.symbol} {item.value}</span>
              )
    })}
        </div>
    </div>
  )
}
