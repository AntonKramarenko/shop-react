import './App.scss'
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GET_ALL_CATEGORY } from "../query/getCategory";
import {Header} from './header/Header';
import ShopBoard from './shopBoard/ShopBoard';

function App() {

  const {data, loading, error} = useQuery(GET_ALL_CATEGORY)
  const [categories, setCategories] = useState([])


useEffect(() => {
  if(!loading){
    setCategories( data.categories)
  }
},[data])


if(!loading){
  console.log(categories)
}

  return (
    <BrowserRouter>
        <div className="app">
            <div className="wrap">
              <Header category={data}/>
                 <Routes>
                  <Route path="/all"   element={<ShopBoard/>}/>
                   <Route path="/clothes" element={<ShopBoard/>}/>
                   <Route path="/tech" element={<ShopBoard/>}/>
                   <Route path="/basket" element={<ShopBoard/>}/>
                   <Route path="*" element={ <Navigate to="/all" /> } />
                </Routes>                
            </div> 
         </div>
    </BrowserRouter>
    
  );
}

export default App;