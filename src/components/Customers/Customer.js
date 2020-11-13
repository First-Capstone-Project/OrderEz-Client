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

    handleFormSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target)
        const customerID = form.get('customer')
        console.log(customerID)
        OrderService.createOrder(customerID)
            .then(res => {
                console.log(res)
                this.props.history.push(`/items/${res.order_customer_id}`);
            })
    }

    //Map props to variables and render the Select Items 
    //
    getcustomers = () => {
        return (this.state.customerList).map((customer) => {
            const id = customer.id
            const name = customer.name
            const adress = customer.adress
            const phone = customer.phone
            return <option name={id} key={id} value={id}>
                {name} - {adress} - {phone}
            </option>

        })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className='container'>
                    <select multiple name='customer' className="select-customer">
                        {this.getcustomers()}
                    </select>
                </div>
                <button className='Submit' type='submit'>Create Order</button>
            </form>
        )
    }
}
export default withRouter(Customer)
