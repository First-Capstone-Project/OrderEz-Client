import React, { Component } from 'react'
import { format } from "date-fns";
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import OrderService from '../services/order-api-service'
import Nav from '../../nav/nav'
import Search from '../search'
import CustomerService from '../services/customer-api-service'
import './order.css'

class AllOrders extends Component {

    state = {
        active: []
    }

    //Api call to get all active orders
    //
    componentDidMount() {
        OrderService.getAll()
            .then(res => {
                this.setState({
                    active: res.rows
                })
            })
    }

    //Render the orders
    //
    renderList = () => {
        return this.state.active
            .sort((order1, order2) => {
                return (order1.customer_id_fk - order2.customer_id_fk)
            })
            .map((order, index) => {
                return <tr key={index}>
                    <td>{order.customer_id_fk}</td>
                    <td>{format(new Date(order.order_date), 'MM/dd/yyyy  hh:mm:ss a')}</td>
                    <td><Link to={`/reciept/${order.customer_id_fk}`}>
                        {order.customer_name}
                    </Link></td>
                    <td>{order.customer_adress}</td>
                    <td>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(order.sum)}</td>
                </tr>
            })

    }

    renderOrders = () => {
        return this.state.active
            .sort((order1, order2) => {
                return (order1.customer_id_fk - order2.customer_id_fk)
            })
            .map((order, index) => {
                return <div key={index} className='box item-orders'>

                    <div className='boxheader'>

                        <div className='boxtitle'>
                            <Link to={`/reciept/${order.customer_id_fk}`}>
                                <h3>{order.customer_name}</h3>
                            </Link>
                        </div>
                    </div>

                    <div className='boxbody'>
                        Date created: {format(new Date(order.order_date), 'MM/dd/yyyy  hh:mm:ss a')}
                    </div>

                    <div className='boxfooter'>
                        Total: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(order.sum)}
                    </div>
                </div>

            })
    }



    render() {
        return <div>
            <Nav />
            <Search />
            <div className='boxheader'>

                <h1 className='boxtitle'>All Active orders</h1>

            </div>
            <div className='boxbody'>
                <div className='allorders'>
                    {this.renderOrders()}
                </div>
            </div>
        </div>
    }


}

export default withRouter(AllOrders)