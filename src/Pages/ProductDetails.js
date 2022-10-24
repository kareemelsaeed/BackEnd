import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ()=>{
    const [product,setProduct] = useState({})
    const {ID} = useParams()

    useEffect(()=>{
        axios({
            method:"get",
            url: `http://localhost:9000/products/${ID}`,
        }).then((data)=>{
            setProduct(data.data)
        })
    },[])

    return(
         <div className="text-center d-flex align-items-center justify-content-center" style={{height:"90vh"}}>
            <div>
            <h1>ProductDetails Number: <span className="text-danger">{ID}</span></h1>
            <h1>Name: <span className="text-danger">{product.name}</span></h1>
            <h1>Price: <span className="text-danger">{product.price}$</span></h1>
            <h1>Quantity: <span className="text-danger">{product.items}</span></h1>
            </div>
         </div>
    )
}

export default ProductDetails;