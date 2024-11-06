import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from '../../Context'
import OrdersCard from "../../Components/OrdersCard"

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-full py-6">
        <h1 className="text-4xl font-semibold text-gray-800">My Orders</h1>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {context.order.map((order, index) => (
            <Link key={index} to={`/my/orders/${index}`}>
              <OrdersCard 
                date={order.date}
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts} 
              />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default MyOrders
