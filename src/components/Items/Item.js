import React, { Component } from 'react'


export default class Item extends Component {

    //Map props to variables and render the Item List
    //
    getItems = () => {
        return (this.props.items).map((item) => {
            const id = item.id
            const name = item.name
            const price = item.price
            const type = item.type
            return <li key={id}>
                <h2>{name}-{type}</h2>
                <p>{price}.00 $</p>
            </li>
        })
    }

    render() {
        return (
            <ul>
                {this.getItems()}
            </ul>
        )
    }
}