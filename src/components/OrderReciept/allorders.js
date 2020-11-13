import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import OrderService from '../services/order-api-service'
import './order.css'

class AllOrders extends Component{
    
    state = {
        active: []
    }

    componentDidMount(){
        OrderService.getAll()
        .then(res=>{
            this.setState({
                active: res.rows
            })
        })
    }

    renderlist = () => {
        return this.state.active.map((order)=>{
            return <li className='listitem'>
                <span>
                Order N#{order.customer_id_fk}
                <Link to={`/reciept/${order.customer_id_fk}`}>
                    <h2>{order.customer_name}</h2>
                </Link>
                </span>
                <h4>Total: {order.sum}$</h4>
            </li>
        })
    }


    render(){
        return <div>
           <nav role="navigation">
                   <Link to={'/'}>Home</Link>
                   <Link to={'/customers'}>New Order</Link>
                   <Link to={'/newitem'}>New Item</Link>
                   <Link to={'/newcustomer'}>New Customer</Link>
            </nav>
            <ol>
            {this.renderlist()}
            </ol>
        </div>
    }
}

export default withRouter(AllOrders)