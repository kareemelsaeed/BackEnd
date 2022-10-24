import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const NewProduct = ()=>{
    
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [items, setItems] = useState(0)
    const navigate = useNavigate()

    const FormSubmit = (e)=>{
        e.preventDefault()
            if (name !== '') {
                axios({
                    method:"post",
                    url:`http://localhost:9000/products`,
                    data:{
                        name,
                        price,
                        items,
                    }
                }).then((data)=>{
                    navigate('/Products')
                })   
            }
    }

    return(
        <div>
            <h1>NewProduct</h1>
            <div>
                <Form onSubmit={FormSubmit}>
                    <Form.Group className="mb-3" controlId="Product Name">
                      <Form.Label>Product Name</Form.Label>
                      <Form.Control type="search" placeholder="Enter Product Name" value={name} 
                      onChange={(e)=> setName(e.currentTarget.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Product Price">
                      <Form.Label>Product Price</Form.Label>
                      <Form.Control type="number" placeholder="Enter Product Price" value={price}
                      onChange={(e)=> setPrice(e.currentTarget.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Product Items">
                      <Form.Label>Product Items</Form.Label>
                      <Form.Control type="number" placeholder="Enter Product Items" value={items}
                      onChange={(e)=> setItems(e.currentTarget.value)}
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default NewProduct;