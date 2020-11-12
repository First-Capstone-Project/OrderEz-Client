import React, { Component } from 'react'


export default class Item extends Component {


    handleFormSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target)
        const id = form.get('item')
        
        
    }
    
    finish = () =>{
        console.log('finish')
    }
    
    //Map props to variables and render the Item Select
    //
    getItems = () => {
        return (this.props.items).map((item) => {
            const id = item.id
            const name = item.name
            const price = item.price
            const type = item.type
            return <option name={id} key={id} value={id}>
                {name} {type} --------------------- 
                {price}.00$
        </option>
        })
    }

    render() {
        return (
            
            <form onSubmit={this.handleFormSubmit}>
                <div className='container'>
                    <select multiple name='item' className="select-item">
                        {this.getItems()}
                    </select>
                </div>
                <button className='Submit' type='submit'>Add Item</button>
                <button onClick={this.finish}>Finish</button>
            </form>
            
            
        )
    }
}