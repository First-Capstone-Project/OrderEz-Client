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


    //Api call to get Info for the order and customer
    //
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
    //map out the reciept
    //
    renderReciept = () => {
        return (this.state.reciept).map((res,index) => {
            const name = res.item_name
            return <tr key={index}>
                <td>{name}-{res.type_name}</td>
                <td>{res.item_price}$</td>
            </tr>
        })

    }
    //Total of the order before tax
    //
    total = () => {
        let total = 0
        this.state.reciept.map((res)=>{
            total+=res.item_price
        })
        return total
    }

    //Map out the Customer info
    //
    customer = () => {
        return this.state.customer.map((res,index)=>{
        return <div key={index} className='box'>
            <div className='boxheader'> 
            <div className='boxtitle'>   
            <h1>Customer Info</h1>
            </div>
            </div>

            <div className='boxbody'>
            <h2>Name: {res.customer_name}</h2>
            <h2>Adress: {res.customer_adress}</h2>
            <p>Phone Number: {res.customer_phone}</p>
            </div>
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
            <div className='boxheader'> 
            <div className='boxtitle'>   
            <h1>Order Info</h1>
            </div>
            </div>   
            <table className="table">
                <tbody>
                <tr>    
                <th>Item</th>
                <th>Price</th>
                </tr>
                {this.renderReciept()}
                <tr>
                    <th>Total</th>
                    <th>{this.total()}$</th>
                </tr>
                </tbody>
            </table>
            </section>
            </div>
            </div>
        )
    }

}

export default withRouter(Reciept)