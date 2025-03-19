/* eslint-disable react/jsx-key */
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import StartMenu from './components/StartMenu'
import Instructions from './components/Instructions'
import Tickets from './components/Tickets'
import Store from './components/Store'
import Register from './components/Register'
import Menu from './components/Menu'

const routes = createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route index element={<Home />} />
    <Route path='instructions' element={<Instructions />} />
    <Route path='start-menu' element={<StartMenu />} />
    <Route path='tickets' element={<Tickets />} />
    <Route path='store' element={<Store />} />
    <Route path='register' element={<Register />} />
    <Route path='menu' element={<Menu />} />
  </Route >
)

export const router = createBrowserRouter(routes)
