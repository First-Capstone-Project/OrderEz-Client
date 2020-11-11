//import { render } from '@testing-library/react'
import React, {Component}  from 'react'
import './Customer.css'
export default class Customer extends Component {

    //Map props to variables and render the List Items 
    //
    getcustomers = () => {
        return (this.props.customer).map((customer) => {
            const id = customer.id
            const name = customer.name
            const adress = customer.adress
            const phone = customer.phone
            return <li key={id}>
                    <h2>{name}</h2>
                    <p>{adress}</p>
                    <p>{phone}</p>
                   </li>
        })
    }
    //Render Unordered list
    //
    render() {

        return (
            <ul>
                {this.getcustomers()}
            </ul>
        )
    }
}