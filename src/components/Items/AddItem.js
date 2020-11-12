import React, { Component } from 'react'
import ItemService from '../services/item-api-service'

export default class AddItem extends Component {

    state = {
        types: 'Pizza',
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target)
        const name = form.get('name')
        const price = form.get('price')
        const typeId = form.get('type')

        ItemService.insertItem(name,price,typeId)
    }
    handleChange = (event) => {
        this.setState({
            types: event.target.value
        })
    }


    render() {
        const types = this.props.types
        const options = types.map((type) => 
            <option name={type.id} key={type.id} value={type.id}>
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
                    <select name='type' className="select-type">
                        {options}
                    </select>
                    <button className='Submit' type='submit'>Add New Item</button>
                </form>
            </section>
        )
    }
}