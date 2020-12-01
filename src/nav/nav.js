import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default class Nav extends Component {

    render() {
        return (
           
                        <div className='boxheader'>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/customers'}>New Order</Link>
                        <Link to={'/customerlist'}>Customers</Link>
                        <Link to={'/menulist'}>Menu</Link>
                        <Link to={'/about'}>About</Link>
                        </div>
                  
        )
    }
}