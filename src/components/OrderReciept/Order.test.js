import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AllOrders from './AllOrders'
import Reciept from './reciept'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <AllOrders />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
})
it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <Reciept />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
})