import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CustomerService from '../services/customer-api-service'
class AddCustomer extends Component {

    //Handle Submit
    //
    handleFormSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target)
        const name = form.get('name')
        const adress = form.get('adress')
        const phone = form.get('phone')

        CustomerService.insertCustomer(name, adress, phone)
            .then(this.props.history.push('/'))

    }

    render() {
        return (
            <section>
                <h1>Add Customer</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <div><input required name='name' id='name' type="text" placeholder="Enter Name"></input></div>
                    <div><input required name='adress' id='adress' type="text" placeholder="Enter Adress"></input></div>
                    <div><input required name='phone' id='phone' type="text" placeholder="Enter Phone Number"></input></div>
                    <button className='Submit' type='submit'>Add New Customer</button>
                </form>

            </section>
        )
    }
}
export default withRouter(AddCustomer)