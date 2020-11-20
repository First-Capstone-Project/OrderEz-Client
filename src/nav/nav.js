import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default class Nav extends Component {

    render() {
        return (
            <div className='top'>
            <nav className='nav'>
                <div className='container'>
                    <div className='collapse'>
                        <ul className='navul'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/customers'}>New Order</Link></li>
                        <li><Link to={'/customerlist'}>Customers</Link></li>
                        <li><Link to={'/menulist'}>Menu</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        )
    }
}