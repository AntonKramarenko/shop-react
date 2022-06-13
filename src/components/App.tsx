import './App.scss'
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GET_ALL_CATEGORY } from "../query/getCategory";
import Header from './header/Header';

function App() {

  const {data, loading, error} = useQuery(GET_ALL_CATEGORY)




  return (
    <BrowserRouter>
        <div className="app">
            <div className="wrap">
              <Header />
            <Routes>
                <Route path="/" element={<div>test</div>}/>
                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
            </div> 
         </div>
    </BrowserRouter>
    
  );
}

export default App;