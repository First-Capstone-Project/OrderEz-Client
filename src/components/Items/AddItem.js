import React, { Component } from 'react'
import ItemService from '../services/item-api-service'

export default class AddItem extends Component {

    state = {
        types: 'Pizza',
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
    }
    handleChange = (event) => {
        this.setState({
            types: event.target.value
        })
    }


    render() {
        const types = this.props.types
        const options = types.map((type) => 
            <option key={type.id} value={type.name}>
                {type.name}
            </option>
        )
        
        return (
            <section>
                <h1>Add Item</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <div><input required name='name' id='name' type="text" placeholder="Enter new Item Name"></input></div>
                    <div><input required name='price' id='price' type="text" placeholder="Enter Price of new Item"></input></div>
                    <p>Select Type</p>
                    <select className="select-type">
                        {options}
                    </select>
                </form>
            </section>
        )
    }
}