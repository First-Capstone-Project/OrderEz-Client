import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

export default class Nav extends Component {

    render() {
        return(
            <nav className = 'nav'>
                <Link to={'/'}>Home</Link>
                <Link to={'/customers'}>New Order</Link>
                <Link to={'/customerlist'}>Customers</Link>
                <Link to={'/menulist'}>Menu</Link>
            </nav>
        )
    }
}