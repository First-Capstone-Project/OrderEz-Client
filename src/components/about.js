import React, { Component } from 'react'
import Nav from '../nav/nav'
export default class About extends Component {

    render() {
        return(
            <div className='box'>
                <Nav />
                <div className='boxheader'>
                    <h1 className='boxtitle'>OrderEz your online free POS</h1>
                </div>
                <div className='boxbody'>
                    <h2>Home</h2>
                    <ol>
                        <li>Type in 'all' to see all orders</li>
                        <li>Can search for customers by name</li>
                        <li>Can click on any order to see details</li>
                    </ol>
                </div>
                <div className='boxbody'>
                    <h2>Create new order</h2>
                    <ol>
                        <li>Can search for customers by phone number</li>
                        <li>Can click on any customer to create a new order</li>
                    </ol>
                </div>
                <div className='boxbody'>
                    <h2>Customers</h2>
                    <ol>
                        <li>Can Add new customer</li>
                        <li>Can click on any customer to edit</li>
                        <li>Can Delete customers without active orders</li>
                    </ol>
                </div>
                <div className='boxbody'>
                    <h2>Menu</h2>
                    <ol>
                        <li>Can add new items</li>
                        <li>Can click on any item to edit</li>
                        <li>Can Delete menu items</li>
                    </ol>
                </div>
            </div>
        )
    }
}