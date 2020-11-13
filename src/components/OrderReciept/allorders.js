import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import OrderService from '../services/order-api-service'
import './order.css'

class AllOrders extends Component {

    state = {
        active: []
    }

    componentDidMount() {
        OrderService.getAll()
            .then(res => {
                this.setState({
                    active: res.rows
                })
            })
    }

    renderList = () => {
        return this.state.active.map((order) => {
            return <tr>
                <td><Link to={`/reciept/${order.customer_id_fk}`}>
                    {order.customer_name}
                </Link></td>
                <td>{order.customer_adress}</td>
                <td>{order.sum}$</td>
            </tr>
        })
    }


    render() {
        return <div>
            <nav role="navigation">
                <Link to={'/'}>Home</Link>
                <Link to={'/customers'}>New Order</Link>
                <Link to={'/newitem'}>New Item</Link>
                <Link to={'/newcustomer'}>New Customer</Link>
            </nav>
            <table className="center">
                <tr>
                    <th>Name</th>
                    <th>Adress</th>
                    <th>Total</th>
                </tr>
                {this.renderList()}
            </table>    
        </div>
    }
}

export default withRouter(AllOrders)