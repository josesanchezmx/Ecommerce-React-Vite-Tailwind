//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([ 
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sing-in', element: <NotFound /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
