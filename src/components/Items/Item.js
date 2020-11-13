import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import OrderService from '../services/order-api-service';


class Item extends Component {

    state = {
        id: 0,
        current: []
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            id: this.props.match.params.order_id
        })

    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target)
        const id = form.get('item')
        const customerOrderId = this.state.id
        OrderService.addItem(id, customerOrderId)

        OrderService.getReciept(customerOrderId)
            .then(rec => {
                this.setState({
                    current: rec.rows
                })
            })
            
    }

    finish = () => {
        this.props.history.push(`/reciept/${this.state.id}`)
    }

    //Map props to variables and render the Item Select
    //
    getItems = () => {
        return (this.props.items).map((item) => {
            const id = item.id
            const name = item.name
            const price = item.price
            const type = item.type
            return <option name={id} key={id} value={id}>
                {name} {type} ---------------------
                {price}.00$
        </option>
        })
    }

    current = () => {
        return this.state.current.map((order) => {
            return <ul>
                <li className='itemz'><p>{order.item_name} - {order.type_name} - {order.item_price}$</p></li>
            </ul>
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <div className='container'>
                        <select multiple name='item' className="select-item">
                            {this.getItems()}
                        </select>
                    </div>
                    <button className='Submit' type='submit'>Add Item</button>
                    <section className='Current'>
                        <h2>Current Order Details</h2>
                        {this.current()}
                    </section>
                </form>
                <div className='button-div'>
                <button className='finish' onClick={this.finish}>Finish</button>
                </div>
                
            </div>

        )
    }
}

export default withRouter(Item)