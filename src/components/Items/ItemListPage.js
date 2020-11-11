import React, { Component } from 'react'
import ItemService from '../services/item-api-service'
import AddItem from './AddItem'
import Item from './Item'


export default class ItemListPage extends Component {

    state = {
        itemList: [],
        itemTypes: [],
    }

    //Api call to server to get Items and Types
    //
    componentDidMount(){
        ItemService.getItems()
        .then(itemList => {
            this.setState({
                itemList
            })
        })
        ItemService.getTypes()
        .then(itemTypes => {
            this.setState({
                itemTypes
            })
        })
    }
    
    

    render(){
        return(
        <section className='Item List'>
        <Item
        items = {this.state.itemList}
        />
        <AddItem 
        types = {this.state.itemTypes}
        />
        </section>
        )
    }
}