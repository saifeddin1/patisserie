import React from 'react'
import {Form, Col, Button} from 'react-bootstrap'
import {useState} from 'react'

const ProductForm = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    return (
        <div>
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={() =>setName(this.value)} placeholder="cake" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={()=>setDescription(this.value)} placeholder="yummyy. .." />
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col}>
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Cakes</option>
                    <option>Pizza</option>
                    <option>Croissant</option>
                </Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={()=> setPrice(this.value)} />
                </Form.Group>
            </Form.Row>
            <Button variant="primary" onClick={(e) => {console.log(e.targer.value)}}>
                Add
            </Button>
            </Form>
        </div>
    )
}

export default ProductForm
