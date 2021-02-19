import React from 'react'
import { Navbar, Nav, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
          <Navbar bg="light" variant="light">
            <Link to="/" className="navbar-brand">Patisserie</Link>
            <Nav className="mr-auto">
                <Link className="nav-link" to="/dashboard" >Dashboard</Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
          
          </Navbar>
        </div>
    )
}

export default Navigation
