import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';



const EditProduct = (props)=>{

    const location = useLocation();
    let productObj = location.state.myProduct
    let product = Object.values(productObj)[0]

    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)
    const [items, setItems] = useState(product.items)
    const navigate = useNavigate()

    const FormSubmit = (e)=>{
        e.preventDefault()
        
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,                  
        }).then((data)=>{
            if (data.isConfirmed) {
                if (name !== '') {
                axios({
                    method:"put",
                    url:`http://localhost:9000/products/${product.id}`,
                    data:{
                        name,
                        price,
                        items,
                    }
                }).then((data)=>{
                    navigate('/Products')
                }) }
            }else if (data.isDenied) {
                navigate('/Products')
            }
        })
  
            
    }

    return(
        <div>
            <h1>EditProduct Number: {product.id}</h1>
            <div className="mt-5">
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

export default EditProduct;