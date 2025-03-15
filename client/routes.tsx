/* eslint-disable react/jsx-key */
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'

const routes = createRoutesFromElements(
  <Route path='/' element={<App />} >
    < Route index element={< Home />} />
  </Route>
)

export const router = createBrowserRouter(routes)
