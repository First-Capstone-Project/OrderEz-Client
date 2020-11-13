import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import CustomerListContext from '../Contexts/CustomerListContext'
import CustomerService from '../services/customer-api-service'
import Customer from './Customer'
import Nav from '../../nav/nav'


export default class CustomersListPage extends Component {
    static contextType = CustomerListContext

    state = {
        customerList: [],
    }

   
    //Search button form
    //
    handleFormSubmit = (event) =>{
        event.preventDefault();
        const form = new FormData(event.target)
        const search = form.get('search')
        console.log(`Search`)
        
    }

    //Render Search button and pass down props to Customer
    render() {
        return (
        <section className='CustomerList'>
            <Nav />
            <h2>Customers</h2>
            <form onSubmit={this.handleFormSubmit}>
            <input name='search' id='search' type="text" placeholder="Search.."></input>
            <button className='searchButton' type='submit'>Search</button>
            </form>
            <Customer />
        </section>
        )
        

    }
}