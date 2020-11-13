import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import OrderService from '../services/order-api-service'
class Reciept extends Component {

    state = {
        reciept: [],
        total: 0,
        customer: []
    }


    componentDidMount() {
        let rID = this.props.match.params.reciept_id
        OrderService.getReciept(rID)
            .then(res => {
                this.setState({
                    reciept: res.rows,
                })
            })
        OrderService.getContact(rID)
            .then(res => {
                this.setState({
                    customer: res.rows
                })
            })    
    }
    renderReciept = () => {
        return (this.state.reciept).map((res) => {
            const name = res.item_name
            return <li key={res.id}>
                <h2>{name}--{res.type_name}</h2>
                <h3>{res.item_price}$</h3>
            </li>
        })

    }
    total = () => {
        let total = 0
        this.state.reciept.map((res)=>{
            total+=res.item_price
        })
        return total
    }
    customer = () => {
        return this.state.customer.map((res)=>{
        return <div>
            <h1>{res.customer_name}</h1>
            <h2>{res.customer_adress}</h2>
            <p>{res.customer_phone}</p>
            </div>
               
        })
    }
    goBack = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
            <nav role="navigation">
                   <Link to={'/'}>Home</Link>
                   <Link to={'/customers'}>New Order</Link>
                   <Link to={'/newitem'}>New Item</Link>
                   <Link to={'/newcustomer'}>New Customer</Link>
            </nav>    
            <section className='Customer'>
                <h1>{this.customer()}</h1>
            </section>    
            <ul>
                {this.renderReciept()}
            </ul>
            <h2>Total: {this.total()}$</h2>
            </div>
        )
    }
}

export default withRouter(Reciept)