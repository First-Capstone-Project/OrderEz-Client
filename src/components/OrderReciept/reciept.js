import React, { Component } from 'react'
import OrderService from '../services/order-api-service'
export default class Reciept extends Component{

    state = {
        info: [],
    }

    componentDidMount(){
        id = //customer order id
        OrderService.getReciept(id)
        .then(res =>{
            this.setState({
                info
            })
        })
    }

    render(){
        return(
            <div>
            <h1>Summary</h1>
            <p>Ime i prezime broj whatever</p>

            <p>Total price</p>
            </div>
        )
    }
}