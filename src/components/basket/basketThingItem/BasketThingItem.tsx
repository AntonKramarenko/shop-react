import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Type } from 'typescript';
import { GET_PRODUCTS_INFO } from '../../../query/getProducts';
import { Product } from '../../../types';
import { Loader } from '../../loader/Loader';

import './BasketThingItem.scss'

interface BasketThingItemProps  {
    basketThingID: string,
    count: number,
    selectAttributes: Array<Type>[],
    product: any,
    
}

export const BasketThingItem: React.FC<BasketThingItemProps> = (props) => {

    const currency = useSelector((state:any) => state.currentCurrency.currentCurrency)
    const {data, loading, error} = useQuery(GET_PRODUCTS_INFO(props.basketThingID))
    const [selectAttributes, setSelectAttributes] = useState(props.selectAttributes)
    const [load, setLoad] = useState(true)
    const [countProduct, setCount] = useState(props.count)
    const [productInfo, setProductInfo] = useState(props.product)
    const [countImges,setCountImges] = useState(0)
    const [imges,setImges] = useState('')

    
    
   useEffect(() => {
        if(!loading) {
            setLoad(false)
            setImges(productInfo.product.gallery[countImges])
            changeCard(props.basketThingID, selectAttributes,props.product )
            
           
   }},[loading,countProduct,selectAttributes])



   function changeCard(id:string, selectAttr:any, product:any){
    let storage:any = localStorage.getItem('basket')
    let currentStorage =  JSON.parse(storage)
    
    let addToBasket:any = [{ 
        key: id,
        count: countProduct,
        selectAttributes: selectAttr,
        product:product
   }]

   if(storage) {
    currentStorage.map((item:any, index:number) => {
        if(item.key === id){
            let copy = false

            item.selectAttributes.forEach((attributes:any, index:number) => {
                const objKey:any = Object.keys(attributes).toString()
                attributes[objKey] !== selectAttr[index][objKey] ? copy = false : copy = true
            })
        
                if(copy){
                    item.count = countProduct
                    addToBasket[index] = (item) 
                } else {
                    item.selectAttributes = selectAttr
                    item.count = countProduct
                    addToBasket[index] = (item) 
                }
            
            
        } else {
            addToBasket.push(item) 
        }
    })
   }
    localStorage.removeItem('basket')
    localStorage.setItem('basket',JSON.stringify(addToBasket) )    
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
    setCount(countProduct + value)
    
}


function setImage(value:number) {
    let imgArrayCount = data.product.gallery.length-1

    if(countImges === imgArrayCount ){
        return  setCountImges(0)
    } 

    if( countImges < 0){
       return setCountImges(imgArrayCount-1)
    }

    console.log(countImges)
    setCountImges(countImges + value)
    setImges(data.product.gallery[countImges])
}

if(countProduct == 0 ){
    return null
}

if(!load){

return (
    <div className='basketThingItem'>
                     <div className="basketThingItem__info">
                         <div className="basketThingItem__brand">{productInfo.product.name}</div>
                         <div className="basketThingItem__name">{productInfo.product.brand}</div>
                         <div className="basketThingItem__price">
                    {
                         productInfo.product.prices.map((item:any) => {
                            if(item.currency.label === currency.label){
                                return  `${item.currency.symbol} ${item.amount * countProduct} `
                       }})
                     }
                        </div>
                        {
                           productInfo.product.attributes.map((attributes:any, indexAttribute:number) => {
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
                            <div className="basketThingItem__counts-count">{countProduct}</div>
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
    
              
    )
}
else{
    return <Loader/>
}

}