import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import OrderService from '../services/order-api-service'
import Nav from '../../nav/nav'
class Reciept extends Component {

    state = {
        reciept: [],
        total: 0,
        customer: []
    }


    componentDidMount() {
        let rID = this.props.match.params.reciept_id
        OrderService.getReciept(rID)
            .then(res => {
                this.setState({
                    reciept: res.rows,
                })
            })
        OrderService.getContact(rID)
            .then(res => {
                this.setState({
                    customer: res.rows
                })
            })    
    }
    renderReciept = () => {
        return (this.state.reciept).map((res) => {
            const name = res.item_name
            return <tr>
                <td>{name}-{res.type_name}</td>
                <td>{res.item_price}$</td>
            </tr>
        })

    }
    total = () => {
        let total = 0
        this.state.reciept.map((res)=>{
            total+=res.item_price
        })
        return total
    }
    customer = () => {
        return this.state.customer.map((res)=>{
        return <div>
            <h1>Customer Info:</h1>
            <h3>Name: {res.customer_name}</h3>
            <h3>Adress: {res.customer_adress}</h3>
            <p>Phone Number: {res.customer_phone}</p>
            </div>
               
        })
    }

    render() {
        return (
            <div>
            <Nav />
            <div className='container'>    
            <section className='item'>
                {this.customer()}
            </section>
            <section className='item'>
            <h1>Order Info: </h1>    
            <table className="comicGreen">
                <tr>    
                <th>Item</th>
                <th>Price</th>
                </tr>
                {this.renderReciept()}
                <tr>
                    <th>Total</th>
                    <th>{this.total()}$</th>
                </tr>
            </table>
            </section>
            </div>
            </div>
        )
    }

}

export default withRouter(Reciept)