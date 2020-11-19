//import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Customer.css'
import OrderService from '../services/order-api-service'
import CustomerService from '../services/customer-api-service'
import Search from '../search'
class Customer extends Component {

    state = {
    customerList: []
    }

    //Api call to get Customers
    //
    componentDidMount(){
        CustomerService.getCustomers()
            .then(customerList => {
                this.setState({
                    customerList
                })
            })
     }

    
    //Search button form
    //
    handleFormSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target)
        const search = form.get('search')
       CustomerService.filter(search)
       .then(result => {
           this.setState({
               customerList: result
           })
       })  

    }
    
    //Select Customer
    //
    handleClick = (event) => {
        OrderService.createOrder(event)
        .then(res => {
            this.props.history.push(`/items/${res.order_customer_id}`);
        })
    }
    
    //Map out customers
    //
    getCustomers = () => {
        return(this.state.customerList).map((customer,index)=>{
            return <div key={index} className='box item-orders'>
                <div className='boxheader'>
                <div className='boxtitle'>   
                <h3>{customer.customer_name}</h3>
                </div>
                </div>
                <div className='boxbody'>
                <p>{customer.customer_adress}</p>
                <p>{customer.customer_phone}</p>
                </div>
                <div className='boxfooter'>
                <button className='btn' value={customer.customer_id} onClick={e => this.handleClick(e.target.value)}>Select</button>
                </div>
            </div>
        })
    }

   

    render() {
        return (
            <div>
            <Search 
            handle = {this.handleFormSubmit}
            title = {'Search by Customer'}
            />    
            <section className='customer-select'>
            <div className='allorders'>
                {this.getCustomers()}
            </div>
            </section>
            </div>
        )
    }
}
export default withRouter(Customer)
