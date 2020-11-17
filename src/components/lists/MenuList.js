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
    
    handleDelete = (id) => {
        ItemService.deleteItem(id)
        .then(this.props.history.push('/'))
    }

    getMenuItem = () => {
        return (this.state.itemList)
        .sort((item1,item2)=>{
            return(item1.id-item2.id)
        })
        .map((item) => {
            return <tr>
            <td>{item.id}</td>
            <td><Link to={`editi/${item.id}`}>{item.name}</Link></td>
            <td>{item.type}</td>
            <td>{item.price}$</td>
            <td><button className='btn' value={item.id} onClick={e => this.handleDelete(e.target.value)}>Delete</button></td>
        </tr>
        })
    }
    
    render() {
        return(
            <section>
           <Nav />
           <AddItem />
           <div className='box'>
           <div className='boxheader'>
           <div className='boxtitle'>    
           <h1>Menu: </h1>
           </div>
           </div>
           <div className='boxbody'>
           <table className="table">
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
                {this.getMenuItem()}
                </tbody>
            </table>
            </div>
            </div>
            
        </section>
        )
    }
}

export default withRouter(MenuList)