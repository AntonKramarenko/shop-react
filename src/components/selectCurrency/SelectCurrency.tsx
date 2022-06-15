import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_CURRENCIES } from '../../query/getCurrency';
import { changeCurrency } from '../../reducers/currentCurrency';
import './SelectCurrency.scss'

export default function SelectCurrency() {

    const currentCurrency = useSelector((state: any) => state.currentCurrency.currentCurrency)
    const dispatch = useDispatch()

    const {data, loading, error} = useQuery(GET_CURRENCIES)
    const [options, setOptions] = useState([currentCurrency])
    const [selectedOption, setSelectedOption] = useState(currentCurrency.symbol);
    const [isActive ,setIsActive] = useState(false)

    useEffect(() => {
        if(!loading){
            setOptions( data.currencies)
        }

      },[data])


    function handleClick() {
        setIsActive(!isActive)
    }

    function onOptionClicked (value:any)  {
        setSelectedOption(value.symbol);
        dispatch(changeCurrency(value))
        setIsActive(!isActive);
      };

 
  return (
    <div className='selectCurrency'>
        <div className='selectCurrency__header' onClick={handleClick}>
            <span className='selectCurrency__current '>{selectedOption}</span>
            <div className='selectCurrency__icon'>{
                isActive 
                    ? <span>&and;</span>
                    : <span>&or;</span>
            }</div>
        </div>
        <div className={isActive ? 'selectCurrency__body isActive': 'selectCurrency__body'} >
            { options.map((item,index) => {
            return (
                 <span 
                 className='selectCurrency__item' 
                 onClick={() => onOptionClicked(options[index])} 
                 key={index}
                 >{item.symbol} {item.label}</span>
              )
    })}
        </div>
    </div>
  )
}
