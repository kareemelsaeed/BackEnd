import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Products = (props)=>{

    const [products,setProducts] = useState([])

    const deletProduct =(product)=>{
        if (product !== undefined) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((data)=>{
                if (data.isConfirmed) {
                    axios({
                        method: "delete",
                        url: `http://localhost:9000/products/${product.id}`
                    }).then((data)=>{
                    });
                    axios({
                        method: "get",
                        url:"http://localhost:9000/products"
                    }).then((data)=>{
                        setProducts(data.data)
                    })
                }
            })

        }

    }

    useEffect(()=>{
        deletProduct()
    },[])
    
    useEffect(()=>{
        axios({
            method: "get",
            url:"http://localhost:9000/products"
        }).then((data)=>{
            setProducts(data.data)
        })
    },[])

    const navigate = useNavigate()



    return(
        <div>


            <Nav.Link as={NavLink} to="/NewProduct">
                <div className="mt-5 py-3">
                    <Button variant="outline-success">Add Products</Button>
                </div>
            </Nav.Link>

            <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>

                  </tr>
                </thead>
                <tbody>
                    {products.map((product)=>(
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td className="d-flex justify-content-between">
                                <h1 className="fs-3" style={{width:"5rem"}}>{product.name}</h1>
                                <Nav.Link as={NavLink} to="/Products">
                                    <Button variant="outline-danger" onClick={()=>deletProduct(product)}>Delete</Button>
                                </Nav.Link>
                                <Nav.Link as={NavLink} to={`/Products/${product.id}`}>
                                    <Button variant="outline-info">View</Button>
                                </Nav.Link>
                                
                                    <Button variant="outline-warning" onClick={()=> navigate("/EditProduct" , {state: {myProduct: {product}}})}>Edite</Button>
                               
                            </td>                   
                        </tr> 
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Products;