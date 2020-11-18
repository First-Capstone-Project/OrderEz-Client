import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddCustomer from './AddCustomer'
import Customers from './Customer'
import CustomersListPage from './CustomersListPage'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <AddCustomer />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <Customers />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
})
it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <CustomersListPage />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })