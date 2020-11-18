import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import EditCustomer from './EditCustomer'
import Edititem from './EditItem'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <EditCustomer />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
})
it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <Edititem />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
})