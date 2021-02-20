import React from 'react'
import {Form, Col, Button} from 'react-bootstrap'
import {useState} from 'react'

const ProductForm = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')

    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(`added,${name}, ${description}, ${price}, ${category}`);
    // }
    return (
        <div className="w-50">
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) =>setName(e.target.value)} placeholder="cake" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(e)=>setDescription(e.target.value)} placeholder="yummyy. .." />
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col}>
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" defaultValue="Choose..." onChange={(e)=> setCategory(e.target.value)}>
                    <option>Choose...</option>
                    <option>Cakes</option>
                    <option>Pizza</option>
                    <option>Croissant</option>
                </Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" onChange={(e)=> setPrice(e.target.value)} />
                </Form.Group>
            </Form.Row>
            <Button variant="primary">
                Add
            </Button>
            </Form>
        </div>
    )
}

export default ProductForm
