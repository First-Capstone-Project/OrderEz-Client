import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddItem from './AddItem'
import Item from './Item'
import ItemListPage from './ItemListPage'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <AddItem />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
})
it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <ItemListPage />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
  <BrowserRouter>
      <ItemListPage />
      <Item  />
  </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})