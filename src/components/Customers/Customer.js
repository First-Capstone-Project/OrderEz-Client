//import { render } from '@testing-library/react'
import React from 'react'
import './Customer.css'
export default class Customer extends React.Component {

    getcustomers = () => {
        return(this.props.customer).map((customer)=>{
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
    render() {

        return (
            <ul>
                {this.getcustomers()}
            </ul>
        )
    }
}