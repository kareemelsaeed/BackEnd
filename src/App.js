import React from "react";
import {Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import EditProduct from "./Pages/EditProduct";
import Home from "./Pages/Home";
import NewProduct from "./Pages/NewProduct";
import ProductDetails from "./Pages/ProductDetails";
import Products from "./Pages/Products";


const App = ()=>{
  return(
    <div>
      <Header />
      


      <div className="row" style={{margin:0}}>
        <div className="col-2 bg-dark" style={{background: "black"}}>
          <SideBar />
        </div>
        <div className="col-10">
            


        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Products" element={<Products />}/>
          <Route path="/Products/:ID" element={<ProductDetails />}/>
          <Route path="/NewProduct" element={<NewProduct />}/>
          <Route path="/EditProduct" element={<EditProduct />}/>
        </Routes>          
        </div>
      </div>
    </div>
  )
}

export default App;