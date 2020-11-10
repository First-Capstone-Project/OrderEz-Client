import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CustomerListPage from '../Customers/CustomersListPage'
import AddCustomer from '../Customers/AddCustomer'
//import CustomerService from '../services/customer-api-service'

class App extends Component {



  render() {

    return (
      <div>
        <AddCustomer />
        <Route
          path={'/newcustomers'}
          Component={AddCustomer}
        />
        <Route
          path={'/customers'}
          Component={CustomerListPage}
        />
        
      </div>
    )
  }
}
export default App;