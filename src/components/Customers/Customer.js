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
               customerList: result.rows
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
            return <div key={index} className='box'>
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
            <div className='box'>

                    <div className='boxheader'>
                        <div className='boxtitle'>
                            <h1>Enter Customer's Phone Number</h1>
                        </div>
                    </div>

                    <form onSubmit={this.handleFormSubmit}>
                        <div className='boxbody'>
                            <div className='formgroup'>
                                <input required name='search' id='search' type="text" placeholder="Search.."></input>
                            </div>
                        </div>
                        <div className='boxfooter'>
                        <button className='btn' type='submit'>Search</button>
                        </div>
                    </form>

                </div>    
            <section className='customer-select'>
                {this.getCustomers()}
            </section>
            </div>
        )
    }
}
export default withRouter(Customer)
