import React, { Component } from 'react'


const CustomerListContext = React.createContext({
    customerList : [],
    error : null,
    setCustomerList: () => {},
})

export default CustomerListContext

export class CustomerListProvider extends Component{
    state = {
        customerList : [],
        error: null,
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