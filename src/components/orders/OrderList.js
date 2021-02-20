import React from 'react'
import Order from './Order'

const OrderList = ({ orders }) => {
    return (
        <div>
            {orders.map((order) => {
                <Order order={order} />
            })}
        </div>
    )
}

export default OrderList
