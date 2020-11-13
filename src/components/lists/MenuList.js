import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import ItemService from '../services/item-api-service'
import Nav from '../../nav/nav'
import AddItem from '../Items/AddItem'

class MenuList extends Component {
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

    getMenuItem = () => {
        return (this.state.itemList)
        .sort((item1,item2)=>{
            return(item1.type-item2.type)
        })
        .map((item) => {
            return <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.price}$</td>
        </tr>
        })
    }
    
    render() {
        return(
            <section>
           <Nav />
           <h1>Menu: </h1>
           <table className="center">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                </tr>
                {this.getMenuItem()}
            </table>
            <AddItem />
        </section>
        )
    }
}

export default withRouter(MenuList)