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
                <div className='box'>
                
                <div className='boxheader'>
                <div className='boxtitle'>
                <h1>Add Customer</h1>
                </div>
                </div>
                
                <form onSubmit={this.handleFormSubmit}>
                    <div className='boxbody'>
                    <div className='formgroup'><input required name='name' id='name' type="text" placeholder="Enter Name"></input></div>
                    <div className='formgroup'><input required name='adress' id='adress' type="text" placeholder="Enter Adress"></input></div>
                    <div className='formgroup'><input required name='phone' id='phone' type="text" placeholder="Enter Phone Number"></input></div>
                    </div>
                    
                    <div className='boxfooter'>
                    <button className='btn' type='submit'>Add New Customer</button>
                    </div>
                </form>
                </div>

            </section>
        )
    }
}
export default withRouter(AddCustomer)