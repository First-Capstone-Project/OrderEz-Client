import React, { Component } from 'react'


const CustomerListContext = React.createContext({
    customer: 0
})

export default CustomerListContext

export class CustomerListProvider extends Component{
    state = {
        customerList : [],
        error: null,
        customer: 0
    }

    setCustomerList = customerList => {
        this.setState({customerList})
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }
    clearError = () => {
        this.setState({ error: null })
    }

    render(){
        const value = {
            customer : this.state.customer,
            customerList : this.state.customerList,
            error : this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setCustomerList : this.setCustomerList,
        }
        return(
            <CustomerListContext.Provider value={value}>
                {this.props.children}
            </CustomerListContext.Provider>
        )
    }

}