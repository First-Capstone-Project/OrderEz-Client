import React, { Component } from 'react'
import CustomerService from '../services/customer-api-service'
import Customer from './Customer'
import Nav from '../../nav/nav'


export default class CustomersListPage extends Component {
   
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

    //Render Search button and pass down props to Customer
    render() {
        return (
            <section className='CustomerList'>
                <Nav />
                <Customer
                customers = {this.state.customerList}
                />
            </section>
        )


    }
}