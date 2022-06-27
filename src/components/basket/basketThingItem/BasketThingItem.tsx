
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Type } from 'typescript';
import useLocalStorage from '../../../hooks/useLocalStorage';


import './BasketThingItem.scss'

interface BasketThingItemProps  {
    currentBasketID: string,
    count: number,
    selectAttributes: Array<Type>[],
    product: any,
    
    
}

export const BasketThingItem: React.FC<BasketThingItemProps> = (props) => {
    const [productCount, setProducCount] = useState(props.count)
    const [price, setPrice] = useState(0)
    const [currentSymbol, setCurrentSymbol] = useState('')
    const [selectAttributes,setSelectAttributes] = useState(props.selectAttributes)
    const [currentImg, setCurrentImg] = useState(props.product.product.gallery[0])
    const [currentCountImg,setCurrentCountImg ] = useState(1)
    const currency = useSelector((state:any) => state.currentCurrency.currentCurrency)
    const storage = useLocalStorage()


    
    useEffect(()=>{
        addCurrentPrice(props.product.product.prices)
        storage.changeAttributesHandler(props.product.product.id, props.currentBasketID, selectAttributes, productCount)
        
       
    },[productCount,selectAttributes,currency])

    function selectAttributesHandler(name:string, item:string){
        let value:any = selectAttributes.map((attribute:any) => {
            let nameKeys =  Object.keys(attribute).join('')
            if(nameKeys === name){
                return {[nameKeys]: item}
            } else { return attribute }
        })
        setSelectAttributes(value)
    }

    const countHandler = (value:number) => {
        productCount+value < 0 ? setProducCount(0): setProducCount(productCount+value)
    }

    const changeCurrentImgHandler = (value:number) => {
        let length = props.product.product.gallery.length
        if(currentCountImg + value < 0){return setCurrentCountImg(length)}
        if(currentCountImg + value > length){return setCurrentCountImg(0)}
        setCurrentCountImg(currentCountImg + value)
        setCurrentImg(props.product.product.gallery[currentCountImg])
    }


 const addCurrentPrice = (prices:any) => {
   prices.map((item:any) => {
        if(item.currency.label === currency.label){
            setCurrentSymbol(`${item.currency.symbol}`)
            setPrice(parseFloat((item.amount * productCount).toFixed(2))) 
   }})
 }

return (
    <div className='basketThingItem'>
                     <div className="basketThingItem__info">
                         <div className="basketThingItem__brand">{props.product.product.name}</div>
                         <div className="basketThingItem__name">{props.product.product.brand}</div>
                         <div className="basketThingItem__price">{currentSymbol} {price}</div>
                        {
                           props.product.product.attributes.map((attributes:any, indexAttribute:number) => {                         
                               if(attributes.name === 'Color'){
                                    return (
                                     <div key={attributes.id} className="basketThingItem___attributes">
                                        <div className="basketThingItem___title">{attributes.name}</div>
                                        <div className="basketThingItem___attributes-items">
                                                 {attributes.items.map((item:any, index:number) =>{
                                                    return (
                                                        <span 
                                                        key={item.id} 
                                                        className={
                                                            (props.selectAttributes.length !== 0 && item.id === selectAttributes[indexAttribute][attributes.name])
                                                                ? 'active-box'
                                                                : ''
                                                        }
                                                        >
                                                            <span key={item.id} 
                                                            id={item.id}
                                                            className='basketThingItem___attributes-item' 
                                                            onClick={() => selectAttributesHandler(attributes.name, item.id)}
                                                            style={{backgroundColor: `${item.value}`}} /> 
                                                        </span>
                                                )})}
                                        </div>
                                    </div>
                                    ) 
                                }
                                return (
                                    <div key={attributes.id} className="basketThingItem___attributes">
                                    <div className="basketThingItem___title">{attributes.name}:</div>
                                    <div className="basketThingItem___attributes-items">
                                             {attributes.items.map((item:any, indexItem:number) =>{
                                             
                                                return (
                                                    <span  
                                                    id={item.id}
                                                    key={indexItem} 
                                                    className={
                                                        (props.selectAttributes.length !== 0 && item.id === selectAttributes[indexAttribute][attributes.name] )
                                                            ? 'basketThingItem___attributes-item active-attribute'
                                                            : 'basketThingItem___attributes-item'
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
                            onClick={() =>countHandler(1)}
                            >+</div>
                            <div className="basketThingItem__counts-count">{productCount}</div>
                            <div 
                            className="basketThingItem__counts-btn"  
                            onClick={() =>countHandler(-1)}
                            >-</div>
                        </div>
                        <div className="basketThingItem__img">
                           <div className='basketThingItem__changers'>
                                  <span className='basketThingItem__changer'onClick={() =>changeCurrentImgHandler(1)} >+</span>
                                  <span className='basketThingItem__changer' onClick={() =>changeCurrentImgHandler(-1)}>-</span>
                           </div>
                            <img src={currentImg} alt="" />
                        </div>
                     </div>
                </div>
    
              
    )
}
