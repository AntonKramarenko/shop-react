import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { GET_PRODUCTS_INFO } from '../../query/getProducts'
import { Loader } from '../loader/Loader'
import './ProductPage.scss'

export const ProductPage = (props:any) => {
const currency = useSelector((state:any) => state.currentCurrency.currentCurrency)
const userLinkId = useParams()
const {data, loading, error} = useQuery(GET_PRODUCTS_INFO(`${userLinkId.id}`))
const [currentImg, setCurrentImg] = useState('')
const [selectAttributes,setSelectAttributes] = useState([])




useEffect(() => {
    if(!loading){
        setCurrentImg(data.product.gallery[0])
    }
},[data,loading])



function changeImgHandler(value:string) {
    setCurrentImg(value)
}

function selectAttributesHandler(name:string, item:string){
    console.log(name, item)
   
}

if(loading) {
    return(
      <Loader />
    )
  }


  const description = data.product.description
    return (
        <div className='productPage'>
            <div className="productPage__imgs">
                <div className="productPage__imgs-select">
                    {data.product.gallery.map((item:string, index:number) => {
                        return (
                            <div 
                            key={index} 
                            className="productPage__img" 
                            onClick={() =>changeImgHandler(item)} 
                            >
                                <img src={item} alt="" />
                            </div>
                        )
                    })}
                </div>
                <div className="productPage__img-main">
                    <img src={currentImg} alt=''/>
                </div>
            </div>
            <div className="productPage__info">
                <div className="productPage__brandName">{data.product.brand}</div>
                <div className="productPage__brandName-title">{data.product.name}</div>
                {
                        data.product.attributes.map((attributes:any, index:number) => {
                           if(attributes.name === 'Color'){
                                return (
                                    <div key={index} className="productPage__attributes">
                                    <div className="productPage__title">{attributes.name}</div>
                                    <div className="productPage__attributes-items">
                                             {attributes.items.map((item:any, index:number) =>{
                                                return (
                                                    <span key={index} 
                                                    className='productPage__attributes-item active-box' 
                                                    onClick={() => selectAttributesHandler(attributes.name, item.id)}
                                                    style={{backgroundColor: `${item.value}`}} /> 
                                            )})}
                                    </div>
                                </div>
                                ) 
                            }
                            return (
                                <div className="productPage__attributes">
                                <div className="productPage__title">{attributes.name}:</div>
                                <div className="productPage__attributes-items">
                                         {attributes.items.map((item:any, index:number) =>{
                                            return (
                                                <span  
                                                key={index} 
                                                className='productPage__attributes-item active-attribute' 
                                                onClick={() => selectAttributesHandler(attributes.name, item.id)}
                                                
                                                >
                                                    {item.displayValue}</span>
                                        )})}
                                </div>
                            </div>
                            )
                        })
                    }
                <div className="productPage__price">
                    <div className="productPage__title">Price:</div>
                    <div className="productPage__price-count">
                    {
                        data.product.prices.map((item:any) => {
                             if(item.currency.label === currency.label){
                                 return  `${item.currency.symbol} ${item.amount}`
                        }})
            }
                    </div>
                </div>
                {data.product.inStock 
                    ? <button className='productPage__btn'>Add to card</button>
                    : null
                    }
                <p className="productPage__description" 
                    dangerouslySetInnerHTML={{__html: description}}
                />
            </div>
        </div>
  )
  
}
