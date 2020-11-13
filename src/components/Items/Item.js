import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import OrderService from '../services/order-api-service';


class Item extends Component {

    state = {
        id: 0
    }

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.setState({
            id: this.props.match.params.order_id 
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target)
        const id = form.get('item')
        const customerOrderId = this.state.id
        OrderService.addItem(id,customerOrderId)
        
    }
    
    finish = () =>{
        this.props.history.push(`/reciept/${this.state.id}`)
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
            <div>
            <form onSubmit={this.handleFormSubmit}>
                <div className='container'>
                    <select multiple name='item' className="select-item">
                        {this.getItems()}
                    </select>
                </div>
                <button className='Submit' type='submit'>Add Item</button>
                
            </form>
            <button onClick={this.finish}>Finish</button>
            
            </div>
            
        )
    }
}

export default withRouter(Item)