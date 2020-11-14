import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Nav from '../../nav/nav'
import ItemService from '../services/item-api-service'

class Edititem extends Component {

    state = {
        item : [],
        name: '',
        price: 0,
    }

    componentDidMount() {
        let id = this.props.match.params.item_id
        ItemService.getItem(id)
        .then(item => {
            this.setState({
                item: item,
                name: item.name,
                price: item.price
            })
        })
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }
    handlePriceChange = event => {
        this.setState({
            price: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        let item_id = this.props.match.params.item_id
        ItemService.updateItem(this.state.name,this.state.price,item_id)
        .then(this.props.history.push('/'))
    }

    render() {
        return(
            <div>
                <Nav />
                <form onSubmit={this.handleSubmit}>
                <div>
                <label>
                    Name:
                    <input 
                    placeholder={this.state.item.name}
                    value={this.state.name}
                    onChange={this.handleNameChange} 
                    type="text" 
                    name="name" 
                    required
                    />
                </label>
                </div>
                <div>
                <label>
                    Price:
                    <input 
                    placeholder={this.state.item.price}
                    value={this.state.price}
                    onChange={this.handlePriceChange} 
                    type="text" 
                    name="price" 
                    required
                    />
                </label>
                </div>
                <div><input type="submit" value="Submit" /></div>
            </form>
            </div>
        )
    }
}

export default withRouter(Edititem)