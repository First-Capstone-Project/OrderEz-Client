import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CustomerService from './services/customer-api-service'

class Search extends Component {

    //Search button form
    //
    handleFormSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target)
        const search = form.get('search')
        CustomerService.filter(search)
            .then(result => {
                this.setState({
                    active: result
                })
            })

    }
    
    render() {
        return <div className='box'>

        <div className='boxheader'>
            <div className='boxtitle'>
                <h1>Enter Customer's Phone Number</h1>
            </div>
        </div>

        <form onSubmit={this.handleFormSubmit}>
            <div className='boxbody'>
                <div className='formgroup'>
                    <input required name='search' id='search' type="text" placeholder="Search.."></input>
                </div>
            </div>
            <div className='boxfooter'>
            <button className='btn' type='submit'>Search</button>
            </div>
        </form>

</div> 
    }
}

export default withRouter(Search)