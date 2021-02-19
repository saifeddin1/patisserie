import React from 'react'
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap'
import ProductForm from './ProductForm'
const Dashboard = ({onButtonClick, showAdd}) => {
    return (
        <div>
        <Button variant="success" style={{marginLeft: 'auto', marginRight: '1rem'}} onClick={onButtonClick}>
        {showAdd? "X Close": "Add Product"}
        </Button>
        {showAdd && <ProductForm /> } 
        </div>
        )
    }
    
    export default Dashboard
    
    // </Link>
    // <Link to="/add">