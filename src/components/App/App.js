import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CustomerListPage from '../Customers/CustomersListPage'
import AddCustomer from '../Customers/AddCustomer'
import ItemListPage from '../Items/ItemListPage'
import CustomersListPage from '../Customers/CustomersListPage'
import AddItem from '../Items/AddItem'
//import CustomerService from '../services/customer-api-service'

class App extends Component {



  render() {

    return (
      <div>
        <ItemListPage />
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