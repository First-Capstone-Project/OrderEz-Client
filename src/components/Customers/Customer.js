//import { render } from '@testing-library/react'
import React, { Component } from 'react'
import './Customer.css'
import OrderService from '../services/order-api-service'
export default class Customer extends Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target)
        const customerID = form.get('customer')

        OrderService.createOrder(customerID)


    }

    //Map props to variables and render the Select Items 
    //
    getcustomers = () => {
        return (this.props.customer).map((customer) => {
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

