import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Nav from '../../nav/nav'
import CustomerService from '../services/customer-api-service'

class EditCustomer extends Component {

    state = {
        customer: [],
        name : '',
        adress: '',
        phone: ''
    }
    
    //Api call to get customer info
    //
    componentDidMount() {
        let id = this.props.match.params.customer_id
        CustomerService.getCustomer(id)
        .then(contact => {
            this.setState({
                customer: contact,
                name: contact.customer_name,
                adress: contact.customer_adress,
                phone: contact.customer_phone
            })
        })
        
    }

    //Update state to current form value
    //
    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }
    handleAdressChange = event => {
        this.setState({
            adress: event.target.value
        })
    }
    handlePhoneChange = event => {
        this.setState({
            phone: event.target.value
        })
    }


    //Handle Submit
    //
    handleSubmit = event => {
        event.preventDefault();
        let customer_id = this.props.match.params.customer_id
        CustomerService.updateCustomer(this.state.name,this.state.adress,this.state.phone,customer_id)
        .then(this.props.history.push('/'))
    }

    render() {
        return (
            <div>
            <Nav />
            <div className='box'>
            <form onSubmit={this.handleSubmit}>
                <div className='boxbody'>
                <label>
                    Name:
                    <input 
                    placeholder={this.state.customer.name}
                    value={this.state.name}
                    onChange={this.handleNameChange} 
                    type="text" 
                    name="name" 
                    required
                    />
                </label>
                </div>
                <div className='boxbody'>
                <label>
                    Adress:
                    <input 
                    placeholder={this.state.customer.adress}
                    value={this.state.adress}
                    onChange={this.handleAdressChange} 
                    type="text" 
                    name="adress" 
                    required
                    />
                </label>
                </div>
                <div className='boxbody'>
                <label>
                    Phone Number:
                    <input 
                    placeholder={this.state.customer.phone}
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}  
                    type="text" 
                    name="phone" 
                    required
                    />
                </label>
                </div>
                <div className='boxfooter'>
                <button className='btn' type='submit'>Submit</button>
                </div>
            </form>
            </div>
            </div>
        )
    }

}

export default withRouter(EditCustomer)