import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {

    render() {
        return(
            <nav role="navigation">
                <Link to={'/'}>Home</Link>
                <Link to={'/customers'}>New Order</Link>
                <Link to={'/customerlist'}>Customers</Link>
                <Link to={'/menulist'}>Menu</Link>
            </nav>
        )
    }
}