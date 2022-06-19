import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { GET_BASKET_INFO } from '../../../query/getBasketInfo';
import { Loader } from '../../loader/Loader';
import './BasketThingItem.scss'

interface BasketThingItemProps  {
    basketThing: any,
    storage: string | null
}

export const BasketThingItem: React.FC<BasketThingItemProps> = (props) => {
    const currency = useSelector((state:any) => state.currentCurrency.currentCurrency)
    const Idkey = Object.keys(props.basketThing).join('')
    const {data, loading, error} = useQuery(GET_BASKET_INFO(Idkey))
    const [load,setLoad] = useState(true)
    const [thingInfo, setThingInfo] = useState([])
    const [selectAttributes, setSelectAttributes] = useState([])
    const [count, setCount] = useState(1)
    const [imges,setImges] = useState('')
    const [countImges,setCountImges] = useState(0)
    




  
  useEffect(() => {
    if(!loading){
        setThingInfo(data)
        addSelectAttributes(props.storage)
        setImges(data.product.gallery[countImges])
        setLoad(false)
    }
  },[data,loading])


function addSelectAttributes(storage:any){
    const startAttributes:any = []

   if(storage){
    let storages = JSON.parse(storage)
    storages.map((stogageID:any) => {
        if(stogageID[Idkey]){
            stogageID[Idkey].map((item:any) => {
                startAttributes.push(item)
    })}

        setSelectAttributes(startAttributes)})}
}

function selectAttributesHandler(name:string, item:string){ 
    let value:any =selectAttributes.map((attribute:any) => {
        let nameKeys =  Object.keys(attribute).join('')
        if(nameKeys === name){
            return {[nameKeys]: item}
        } else { return attribute }
    })

    setSelectAttributes(value)
}

function counter(value:number) {
    setCount(count + value)
}

function setImage(value:number) {
    let imgArrayCount = data.product.gallery.length -1

    if(countImges < 0){
        return  setCountImges(imgArrayCount)
    }
    if(countImges === imgArrayCount){
        return  setCountImges(0)
    } 

    console.log(countImges)
    setCountImges(countImges + value)
    setImges(data.product.gallery[countImges])
}

function prices(){
    
    
        data.product.prices.map((item:any) => {
             if(item.currency.label === currency.label){
                 return  `${item.currency.symbol} ${item.amount * count} `
        }})

}


if(load) {
    return <Loader/>
}



return ( !load && count
        ?   <div className='basketThingItem'>
                <div className="basketThingItem__info">
                    <div className="basketThingItem__brand">{data.product.brand}</div>
                    <div className="basketThingItem__name">{data.product.name}</div>
                    <div className="basketThingItem__price">
                 {
                     data.product.prices.map((item:any) => {
                        if(item.currency.label === currency.label){
                            return  `${item.currency.symbol} ${item.amount * count} `
                   }})
                 }
                    </div>
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
                                                        (selectAttributes.length !== 0 && item.id == selectAttributes[indexAttribute][attributes.name])
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

                </div>

                
          
                <div className="basketThingItem__countBox">
                    <div className="basketThingItem__counts">
                        <div 
                        className="basketThingItem__counts-btn"
                        onClick={() => counter(1)}
                        >+</div>
                        <div className="basketThingItem__counts-count">{count}</div>
                        <div 
                        className="basketThingItem__counts-btn"
                        onClick={() => counter(-1)}
                        >-</div>
                    </div>
                    <div className="basketThingItem__img">
                       <div className='basketThingItem__changers'>
                              <span className='basketThingItem__changer' onClick={() => setImage(1)}> +</span>
                              <span className='basketThingItem__changer' onClick={() => setImage(-1)}> - </span>
                       </div>
                       
                        <img src={imges} alt="" />
                    </div>
                 </div>
            </div>

        : null    
)}


