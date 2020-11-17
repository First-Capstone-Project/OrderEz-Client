import React, { Component } from 'react'
import ItemService from '../services/item-api-service'
import AddItem from './AddItem'
import Item from './Item'
import './item.css'


export default class ItemListPage extends Component {

    state = {
        itemList: [],
    }

    //Api call to server to get Items
    //
    componentDidMount(){
        ItemService.getItems()
        .then(itemList => {
            this.setState({
                itemList
            })
        })
    }
    
    

    render(){
        return(
        <section className='Item-List'>
        <Item
        items = {this.state.itemList}
        />
        </section>
        )
    }
}