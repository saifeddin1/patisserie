import React from 'react'
import { Navbar, Nav, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
        <Navbar bg="light" variant="light">
        <Link to="/">Patisserie</Link>
        <Nav className="mr-auto">
        <Link   to="/dashboard">Dashboard</Link>
        <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        <Link to="/add">
        <Button variant="success" style={{marginLeft: 'auto', marginRight: '1rem'}}>
        Add Product
        </Button>
        </Link>
      </Navbar>
        </div>
    )
}

export default Navigation
