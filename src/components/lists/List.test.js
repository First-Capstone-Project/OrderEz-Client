import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import CustomerList from './CustomerList'
import MenuList from './MenuList'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <CustomerList />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
})
it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <MenuList />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
})