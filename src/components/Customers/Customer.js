//import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Customer.css'
import OrderService from '../services/order-api-service'
import CustomerService from '../services/customer-api-service'
class Customer extends Component {

    state = {
        customerList: []
    }


    //API call to server to get Customers
    //
    componentDidMount(){
        CustomerService.getCustomers()
            .then(customerList => {
                this.setState({
                    customerList
                })
            })
    }

    //Handle Submit
    //
    handleFormSubmit = (event) => {
        event.preventDefault()
        const form = new FormData(event.target)
        const customerID = form.get('customer')
        OrderService.createOrder(customerID)
            .then(res => {
                this.props.history.push(`/items/${res.order_customer_id}`);
            })
    }

    handleClick = (event) => {
        console.log(event)
        OrderService.createOrder(event)
        .then(res => {
            this.props.history.push(`/items/${res.order_customer_id}`);
        })
    }
    
    getCustomers = () => {
        return(this.state.customerList).map((customer)=>{
            return <div className='customer'>
                <h3>{customer.name}</h3>
                <p>{customer.adress}</p>
                <p>{customer.phone}</p>
                <button value={customer.id} onClick={e => this.handleClick(e.target.value)}>Select</button>
            </div>
        })
    }

    render() {
        return (
            <section className='customer-select'>
                {this.getCustomers()}
            </section>
        )
    }
}
export default withRouter(Customer)
