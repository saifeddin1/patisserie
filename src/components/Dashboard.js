import React, {useState} from 'react'
import { Button, Row ,Col} from 'react-bootstrap'
import ProductForm from './products/ProductForm'
import OrderList from './orders/OrderList'

const Dashboard = ({onButtonClick, showAdd}) => {
    const [orders, setOrders] = useState([{
        name:"dfdf",
        description:"fgfg",
        price: 3,
        category: "fdfd"
    },
    {
        name:"dfdf",
        description:"fgfg",
        price: 3,
        category: "fdfd"
    },
    {
        name:"dfdf",
        description:"fgfg",
        price: 3,
        category: "fdfd"
    }
])
    return (
        <div>
            <Row>
                <Col>
                    <Button 
                    style={{marginLeft: 'auto', marginRight: '1rem'}} 
                    id="btn" 
                    onClick={onButtonClick}>
                    {showAdd? "X Close": "Add Product"}
                    </Button>
                    {showAdd && <ProductForm /> } 
                </Col>
                <Col>
                    <h1>Orders</h1>
                    <OrderList orders={orders}/>
                </Col>
            </Row>
        </div>
        )
    }
    
    export default Dashboard
    
    // </Link>
    // <Link to="/add">