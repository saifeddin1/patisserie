import React from 'react'
import {Card, Button} from 'react-bootstrap'
import logo from './logo.jpg';

const Product = () => {
    return (
        <>
            <Card style={{ width: '18rem' }} className="mt-3">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
            <Card.Title>Cake</Card.Title> 
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <div className=" d-flex justify-content-between">
                <Button variant="danger">Order</Button>
                <span className="text-info fs-4">45 DT</span>
            </div>
            </Card.Body>
            </Card>       

         </>
    )
}

export default Product
