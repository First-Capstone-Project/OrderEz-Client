import React, { Component } from 'react'
import { format } from "date-fns";
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import OrderService from '../services/order-api-service'
import Nav from '../../nav/nav'
import Search from '../search'
import './order.css'

class AllOrders extends Component {

    state = {
        active: [],
        current: [],
        pages: 0,
        pointer: 1
    }

    //Api call to get all active orders
    //
    componentDidMount() {
        OrderService.getAll('all')
            .then(res => {
                let array = []
                const pages = res.rows.length
                res.rows.map((res, index) => {
                    if (index < 10) {
                        array.push(res)
                    }
                })
                this.setState({
                    active: res.rows,
                    pages: pages / 10 - 1,
                    current: array
                })
            })

    }

    pagination = (id) => {
        let array = []
        let current = id * 10
        this.state.active.map((order, index) => {
            if (index < current && index > current - 11) {
                array.push(order)
            }
        })
        this.setState({
            current: array
        })
    }

    //Map out the active orders
    //
    renderOrders = () => {
        return this.state.current
            .sort((order1, order2) => {
                return (order1.customer_id_fk - order2.customer_id_fk)
            })
            .map((order, index) => {
                return <div key={index} className='box item-orders'>

                    <div className='boxheader'>

                        <div className='boxtitle'>
                            <Link to={`/reciept/${order.customer_id_fk}`}>
                                <h3>{order.customer_name}</h3>
                            </Link>
                        </div>
                    </div>

                    <div className='boxbody'>
                        Date created: {format(new Date(order.order_date), 'MM/dd/yyyy  hh:mm:ss a')}
                    </div>

                    <div className='boxfooter'>
                        Total: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(order.sum)}
                    </div>
                </div>

            })
    }

    //Search button form handle
    //
    handleFormSubmit = event => {
        event.preventDefault()
        const form = new FormData(event.target)
        const search = form.get('search')
        OrderService.getAll(search)
            .then(res => {
                this.setState({
                    current: res.rows
                })
            })
    }





    render() {
        let buttons = []
        for (let i = 1; i < this.state.pages + 2; i++) {
            buttons.push(<button key={i} onClick={e => this.pagination(e.target.value)} value={i} className='btn pag'>{i}</button>)
        }
        return <div>
            <Nav />
            <Search
                handle={this.handleFormSubmit}
                title={'Search by Name'}
            />
            <div className='boxheader'>

                <h1 className='boxtitle'>All Active orders</h1>

            </div>
            <div className='boxbody'>
                <div className='pagination'>
                    {buttons}
                </div>
            </div>
            <div className='boxbody'>
                <div className='allorders'>
                    {this.renderOrders()}
                </div>
            </div>
            
        </div>
    }


}

export default withRouter(AllOrders)