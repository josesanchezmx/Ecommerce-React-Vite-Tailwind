import { useRoutes, HashRouter } from 'react-router-dom' 
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([ 
    { path: '/', element: <Home /> },
    { path: '/Clothes', element: <Home /> },
    { path: '/Electronics', element: <Home /> },
    { path: '/Furnitus', element: <Home /> },
    { path: '/Toys', element: <Home /> },
    { path: '/Others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my/orders/:id', element: <MyOrder /> },
    { path: '/sing-in', element: <SingIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <HashRouter> 
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </HashRouter>
    </ShoppingCartProvider>
  )
}

export default App
