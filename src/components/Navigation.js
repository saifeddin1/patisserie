import React from 'react'
import { Navbar, Nav, Button} from 'react-bootstrap'

const Navigation = () => {
    return (
        <div>
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Patisserie</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Categories</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        <Button variant="success" style={{marginLeft: 'auto', marginRight: '1rem'}}>Add Product</Button>
      </Navbar>
        </div>
    )
}

export default Navigation
