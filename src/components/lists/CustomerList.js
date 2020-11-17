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
    }

    handleDelete = (id) => {
        CustomerService.deleteCustomer(id)
        .then(this.props.history.push('/'))
    }

    getCustomers = () => {
        return(this.state.customerList)
        .sort((customer1,customer2)=>{
            return (customer1.customer_id-customer2.customer_id)
        })
        .map((customer,index)=>{
            return <tr key={index}>
                <td>{customer.customer_id}</td>
                <td><Link to={`edit/${customer.customer_id}`}>{customer.customer_name}</Link></td>
                <td>{customer.customer_adress}</td>
                <td>{customer.customer_phone}</td>
                <td><button className='btn form-btn' value={customer.customer_id} onClick={e => this.handleDelete(e.target.value)}>Delete</button></td>
            </tr>
        })
    }

    render() {
        return(
        <section>
           <Nav />
           <AddCustomer /> 
           <div className='box'>
           
           <div className='boxheader'>    
           <div className='boxtitle'>
           <h1>Customers</h1>
           </div>
           </div>
           <div className='boxbody no-padding'>
           <table className="table">
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Adress</th>
                    <th>Phone</th>
                    <th>Delete</th>
                </tr>
                {this.getCustomers()}
                </tbody>
            </table>
            </div>

            </div>  
        </section>
        )
    }
    
}

export default withRouter(CustomerList)