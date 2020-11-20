import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import OrderService from '../services/order-api-service';


class Item extends Component {

    state = {
        id: 0,
        current: [],
        check: false,
        check1: false,
        check2: false,
        total: 0
    }

    //Item id
    //
    componentDidMount() {
        this.setState({
            id: this.props.match.params.order_id
        })

    }

    //Redirect to Reciept
    //
    finish = () => {
        this.props.history.push(`/reciept/${this.state.id}`)
    }

    //Add items to current order
    //
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

    //Map out the items
    //
    getMenuItem = (type) => {
        return (this.props.items).map((item, index) => {
            if (item.type === type) {
                return <div key={index} className='menuitem'>
                    <button
                        className='itembtn'
                        value={item.id}
                        onClick={e => this.handleClick(e.target.value)}>
                        {item.name} - {item.price}$
                </button>
                </div>
            }
        })
    }

    //Expand classes
    //
    expandPizza = () => {
        this.setState(prevState => ({
            check: !prevState.check
        }))
    }
    expandSalad = () => {
        this.setState(prevState => ({
            check1: !prevState.check1
        }))
    }
    expandBurger = () => {
        this.setState(prevState => ({
            check2: !prevState.check2
        }))
    }


    render() {
        const current = this.state.current.map((order, index) => {
            return <tr key={index}>
                <td>{order.item_name}</td>
                <td>{order.item_price}$</td>
            </tr>
        })

        let classname = 'show'
        if (!this.state.check) { classname = 'hidden' }
        else classname = 'show'

        let classname1 = 'show'
        if (!this.state.check1) { classname1 = 'hidden' }
        else classname1 = 'show'

        let classname2 = 'show'
        if (!this.state.check2) { classname2 = 'hidden' }
        else classname2 = 'show'


        return (
            <div>
                <div className='boxfooter'>
                    <button className='btngreen' onClick={this.finish}>Finish</button>
                </div>
                <div className='i1'>
                    <section className='Current'>
                        <div className='box'>
                            <div className='boxheader'>
                                <div className='boxtitle'>
                                    <h1>Order Details</h1>
                                </div>
                            </div>
                            <div className='boxbody'>
                                <table className='table'>
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                        </tr>
                                        {current}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <section className='item-select'>
                        <div className='box'>
                            <div className='boxheader'>
                                <div className='boxtitle'>
                                    <h1>Add items to order</h1>
                                </div>
                            </div>

                            <div className='boxbody'>
                                <div className='Pizza'>
                                    <button className='expand' onClick={this.expandPizza}>Pizza</button>
                                    <div className={classname}>
                                        {this.getMenuItem('Pizza')}
                                    </div>
                                </div>

                                <div className='Salads'>
                                    <button className='expand' onClick={this.expandSalad}>Salads</button>
                                    <div className={classname1}>
                                        {this.getMenuItem('Salad')}
                                    </div>
                                </div>

                                <div className='Burgers'>
                                    <button className='expand' onClick={this.expandBurger}>Burgers</button>
                                </div>
                                <div className={classname2}>
                                    {this.getMenuItem('Burger')}
                                </div>
                            </div>


                        </div>
                    </section>
                </div>
                
            </div>

        )
    }
}

export default withRouter(Item)