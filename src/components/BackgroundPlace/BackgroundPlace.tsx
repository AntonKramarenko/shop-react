import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrencyIsActive, changeIsActiveAll } from '../../reducers/currentBackground'
import './BackgroundPlace.scss'

export const BackgroundPlace = () => {

  const currentIsActiveBasket = useSelector((state: any) => state.currentBackground.basket)
  const currentIsActiveCurrency = useSelector((state: any) => state.currentBackground.currency)
  const [isActiveBackground, setIsActiveBackground] = useState(currentIsActiveBasket || currentIsActiveCurrency)
  const dispatch = useDispatch()



  useEffect(()=>{

    setIsActiveBackground(currentIsActiveBasket || currentIsActiveCurrency)    
   
  },[currentIsActiveBasket, currentIsActiveCurrency])

  const clickBackgroundHandler =() => {
    setIsActiveBackground(!isActiveBackground)
    dispatch(changeIsActiveAll())
  }

// console.log(isActiveBackground);


  return (
    <div 
    className={isActiveBackground ? 'backgroundPlace__active' : 'backgroundPlace'}
    onClick={() => clickBackgroundHandler() }
    ></div>
  )
}
