import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import ItemService from '../services/item-api-service'


class AddItem extends Component {

    state = {
       types: [],
    }

    //Api call to get types for select
    //
    componentDidMount(){
        ItemService.getTypes()
        .then(types => {
            this.setState({
                types
            })
        })
    }

    //Handle Submit
    //
    handleFormSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target)
        const name = form.get('name')
        const price = form.get('price')
        const typeId = form.get('type')

        ItemService.insertItem(name, price, typeId)
        .then(this.props.history.push('/'))
    }
    

    render() {
        const types = this.state.types
        const options = types.map((type) =>
            <option name={type.id} key={type.id} value={type.id}>
                {type.name}
            </option>
        )

        return (
            <section>
                <div className='box'>
                
                <div className='boxheader'>
                <div className='boxtitle'>
                <h1>Add Item</h1>
                </div>
                </div>
                
                <form onSubmit={this.handleFormSubmit}>
                    <div className='boxbody'>

                    <div className='formgroup'><input required name='name' id='name' type="text" placeholder="Enter new Item Name"></input></div>
                    <div className='formgroup'><input required name='price' id='price' type="text" placeholder="Enter Price of new Item"></input></div>
                    
                    <div className='formgroup'>
                    <div className='boxbody'><label>Select Type</label></div>
                    <select className='formcontrol' name='type' className="select-type">
                        {options}
                    </select>
                    </div>

                    </div>
                    
                    <div className='boxfooter'>
                        <button className='btn' type='submit'>Add New Item</button>
                    </div>
                </form>

                </div>
            </section>
        )
    }
}

export default withRouter(AddItem)