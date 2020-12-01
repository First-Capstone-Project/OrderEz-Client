import React, { Component } from 'react'
import { Route , BrowserRouter as Router } from 'react-router-dom'
import CustomerListPage from '../Customers/CustomersListPage'
import AddCustomer from '../Customers/AddCustomer'
import ItemListPage from '../Items/ItemListPage'
import AddItem from '../Items/AddItem'
import Reciept from '../OrderReciept/reciept'
import AllOrders from '../OrderReciept/allorders'
import CustomerList from '../lists/CustomerList'
import MenuList from '../lists/MenuList'
import EditCustomer from '../Edit/EditCustomer'
import EditItem from '../Edit/EditItem'
import About from '../about'
import LandingPage from '../landing'


class App extends Component {



  render() {

    return (
      
        <div>

        <Route 
        exact
        path="/"
        component={AllOrders}
        />
        
        <Route 
        exact
        path="/customers"
        component={CustomerListPage}
        />

        <Route 
        path="/edit/:customer_id"
        component={EditCustomer}
        />

        <Route 
        path="/editi/:item_id"
        component={EditItem}
        />

        <Route 
        path="/items/:order_id"
        component={ItemListPage}
        />
       
        <Route 
        path="/newitem"
        component={AddItem}
        />

        <Route 
        path="/newcustomer"
        component={AddCustomer}
        />

        <Route 
        path="/reciept/:reciept_id"
        component={Reciept}
        />

        <Route 
        path='/customerlist'
        component={CustomerList}
        />
        
        <Route 
        path='/menulist'
        component={MenuList}
        />
        
        <Route 
        path='/about'
        component={About}
        />

        <Route 
        path='/landing'
        component={LandingPage}
        />
  
      </div>
    )
  }
}
export default App;