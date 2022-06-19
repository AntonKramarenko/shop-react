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
        startSelectAttributes(data)
    }
},[data,loading])


if(loading) {
    return(
      <Loader />
    )
  }


function changeImgHandler(value:string) {
    setCurrentImg(value)
}


function selectAttributesHandler(name:string, item:string){
    let value:any = selectAttributes.map((attribute:any) => {
        let nameKeys =  Object.keys(attribute).join('')
        if(nameKeys === name){
            return {[nameKeys]: item}
        } else { return attribute }
    })
    setSelectAttributes(value)
}

function startSelectAttributes(data:any){
    const startAttributes:any = []
    data.product.attributes.map((attribute:any) => {
        startAttributes.push({[attribute.name]: attribute.items[0].id})})
    setSelectAttributes(startAttributes)
}

function addToCardHandler(id:string, selectAttr:any){
    let storage:any = localStorage.getItem('basket')
    let currentStorage =  JSON.parse(storage)
    const addToBasket = [{[id]: selectAttr}]

   if(storage){
    currentStorage.map((i:any) =>{
      addToBasket.push(i)
    })
    
    localStorage.removeItem('basket')
    localStorage.setItem('basket',JSON.stringify(addToBasket) )
   } else {
    localStorage.setItem('basket',JSON.stringify(addToBasket) )
   }
}

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
                        data.product.attributes.map((attributes:any, indexAttribute:number) => {
                           if(attributes.name === 'Color'){
                                return (
                                 <div key={indexAttribute} className="productPage__attributes">
                                    <div className="productPage__title">{attributes.name}</div>
                                    <div className="productPage__attributes-items">
                                             {attributes.items.map((item:any, index:number) =>{
                                                return (
                                                    <span 
                                                    key={index} 
                                                    className={
                                                        (selectAttributes.length !== 0 && item.id == selectAttributes[indexAttribute][attributes.name] )
                                                            ? 'active-box'
                                                            : ''
                                                    }
                                                    >
                                                        <span key={index} 
                                                        id={item.id}
                                                        className='productPage__attributes-item' 
                                                        onClick={() => selectAttributesHandler(attributes.name, item.id)}
                                                        style={{backgroundColor: `${item.value}`}} /> 
                                                    </span>
                                            )})}
                                    </div>
                                </div>
                                ) 
                            }
                            return (
                                <div key={indexAttribute} className="productPage__attributes">
                                <div className="productPage__title">{attributes.name}:</div>
                                <div className="productPage__attributes-items">
                                         {attributes.items.map((item:any, indexItem:number) =>{
                                            return (
                                                <span  
                                                id={item.id}
                                                key={indexItem} 
                                                className={
                                                    (selectAttributes.length !== 0 && item.id == selectAttributes[indexAttribute][attributes.name] )
                                                        ? 'productPage__attributes-item active-attribute'
                                                        : 'productPage__attributes-item'
                                                }
                                                onClick={() => selectAttributesHandler(attributes.name, item.id)}
                                                >
                                                    {item.value}</span>
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
                    ? <button 
                    className='productPage__btn'
                    onClick={() => addToCardHandler(data.product.id, selectAttributes)}
                    >Add to card</button>
                    : null
                    }
                <p className="productPage__description" 
                    dangerouslySetInnerHTML={{__html: data.product.description}}
                />
            </div>
        </div>
  )
  
}
