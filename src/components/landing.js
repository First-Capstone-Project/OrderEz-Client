import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import img1 from './img/customers.png'
import img2 from './img/menu.jpg'
import img3 from './img/orders.jpg'
export default class LandingPage extends Component {
    render() {
        return(
            <div className='box'>
                <div className='boxheader'>
                <h1>OrderEz</h1>
                <h2>Online Free POS</h2>
                </div>
                
                <div className='boxbody '>
                <h2>Save your customers</h2>
                <div className='cont'>
                <img src={img1} alt={'Users'} />
                <p className='text'>
                Keep track of all the people that order from you, 
                save them for easy acess. 
                <span>
                <ul>
                    <li>Add Customers</li>
                    <li>Edit Customers</li>
                    <li>Delete Customers</li>
                    <Link to={'/customerlist'}><button className='btn'>Try it NOW</button></Link>
                </ul>
                </span>
                </p>
                </div>
                </div>

                <div className='boxbody '>
                <h2>Custom Menu</h2>
                <div className='cont'>
                <img src={img2} alt={'Menu'}/>
                <p className='text'>
                Every restourant has its own personal menu that can be 
                saved and edited
                <span>
                <ul>
                    <li>Add Items</li>
                    <li>Edit Items</li>
                    <li>Delete Items</li>
                    <Link to={'/menulist'}><button className='btn'>Try it NOW</button></Link>
                </ul>
                </span>
                </p>
                </div>
                </div>

                <div className='boxbody '>
                <h2>Orders</h2>
                <div className='cont'>
                <img src={img3} alt={'Order'} />
                <p className='text'>
                Kepp track of all your restourants orders in one place
                <span>
                <ul>
                    <li>Create orders</li>
                    <li>See Details about Orders</li>
                    <Link to={'/customers'}><button className='btn'>Try it NOW</button></Link>
                </ul>
                </span>
                </p>
                </div>
                </div>

            </div>
        )
    }
}