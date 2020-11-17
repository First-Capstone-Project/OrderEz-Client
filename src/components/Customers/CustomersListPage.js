import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CustomerListContext from '../Contexts/CustomerListContext'
import CustomerService from '../services/customer-api-service'
import Customer from './Customer'
import Nav from '../../nav/nav'


export default class CustomersListPage extends Component {
   

    //Render Search button and pass down props to Customer
    render() {
        return (
            <section className='CustomerList'>
                <Nav />
                
                <Customer />
            </section>
        )


    }
}