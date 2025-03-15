/* eslint-disable react/jsx-key */
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import StartMenu from './components/StartMenu'
import Instructions from './components/Instructions'

const routes = createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route index element={<Home />} />
    <Route path='instructions' element={<Instructions />} />
    <Route path='start-menu' element={<StartMenu />} />
  </Route>
)

export const router = createBrowserRouter(routes)
