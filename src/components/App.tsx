import './App.scss'
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GET_ALL_CATEGORY } from "../query/getCategory";
import {Header} from './header/Header';
import {ShopBoard} from './shopBoard/ShopBoard';
import {Loader} from './loader/Loader'
import { ProductPage } from './productPage/ProductPage';
 
export default function App()  {

  const {data, loading, error} = useQuery(GET_ALL_CATEGORY)
  const [categories, setCategories] = useState([])


useEffect(() => {
  if(!loading){
    setCategories( data.categories)
  }
},[data])


if(loading) {
  return(
    <Loader />
  )
}

return (
    <BrowserRouter>
        <div className="app">
            <div className="wrap">
              <Header category={categories}/>
                 <Routes>
                  {
                    categories.map((item:any) => {
                      
                      return (
                       <Route path={`/${item.name}`} key={item.name}  element={<ShopBoard title={item.name}  products={item.products}/>}/>
                      )
                     })
                  }
                   <Route path="/basket" element={<div>Basket</div>}/>
                   <Route path="/productCard" element={<ProductPage/>}/>
                   {/* <Route path="*" element={ <Navigate to="/category/" /> } /> */}
                </Routes>                
            </div> 
         </div>
    </BrowserRouter>
)
}
