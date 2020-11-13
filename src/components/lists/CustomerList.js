import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import CustomerService from '../services/customer-api-service'
import Nav from '../../nav/nav'
import AddCustomer from '../Customers/AddCustomer'

class CustomerList extends Component {

    state = {
        customerList: []
    }
    componentDidMount(){
        CustomerService.getCustomers()
            .then(customerList => {
                this.setState({
                    customerList
                })
            })
            console.log(this.state.customerList)
    }

    getCustomers = () => {
        return(this.state.customerList)
        .sort((customer1,customer2)=>{
            return (customer1.id-customer2.id)
        })
        .map((customer)=>{
            return <tr>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.adress}</td>
                <td>{customer.phone}</td>
            </tr>
        })
    }

    render() {
        return(
        <section>
           <Nav />
           <h1>All Customers: </h1>
           <table className="center">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Adress</th>
                    <th>Phone</th>
                </tr>
                {this.getCustomers()}
            </table>
            <AddCustomer />   
        </section>
        )
    }
    
}

export default withRouter(CustomerList)