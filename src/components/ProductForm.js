import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
const ProductForm = () => {
    return (
        <div>
        <Form>
  <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="cake" />
  </Form.Group>

  <Form.Group>
    <Form.Label>Description</Form.Label>
    <Form.Control placeholder="yummyy. .." />
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
      <Form.Control />
    </Form.Group>
  </Form.Row>
  <Button variant="primary" type="submit">
    Add
  </Button>
</Form>
        </div>
    )
}

export default ProductForm
