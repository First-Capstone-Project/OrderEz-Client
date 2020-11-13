import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import OrderService from '../services/order-api-service';


class Item extends Component {

    state = {
        id: 0,
        current: []
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
            .then(() =>
                OrderService.getReciept(customerOrderId)
                    .then(rec => {
                        this.setState({
                            current: rec.rows
                        })
                    }))
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
    handleClick = (event) => {
        const customerOrderId = this.state.id
        OrderService.addItem(event, customerOrderId)
            .then(() =>
                OrderService.getReciept(customerOrderId)
                    .then(rec => {
                        this.setState({
                            current: rec.rows
                        })
                    }))
    }

    getMenuItem = () => {
        return (this.props.items).map((item) => {
            return <div className='menuitem'>
                <h3>{item.name} {item.type} - {item.price} $</h3>
                <button value={item.id} onClick={e => this.handleClick(e.target.value)}>Add</button>
            </div>
        })
    }



    render() {
        const current = this.state.current.map((order) => {
            return <ul>
                <li className='itemz'><p>{order.item_name} - {order.type_name} - {order.item_price}$</p></li>
            </ul>
        })

        return (
            <div>
                <div className='button-div'>
                    <button className='finish' onClick={this.finish}>Finish</button>
                </div>
                <form onSubmit={this.handleFormSubmit}>
                <section className='Current'>
                        <h2>Current Order Details</h2>
                        {current}
                    </section>
                    <h3>Select from menu:</h3>
                    <section className='item-select'>
                        {this.getMenuItem()}
                    </section>
                </form>
            </div>

        )
    }
}

export default withRouter(Item)