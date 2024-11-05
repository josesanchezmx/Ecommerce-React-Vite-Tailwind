import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import Layout from "../../Components/Layout";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  // Obtenemos el último pedido
  const lastOrder = context.order?.slice(-1)[0];

  return (
    <Layout>
      <h2>My Order</h2>
      <div className='flex flex-col w-80 pt-6'>
        {
          lastOrder?.products.map((product) => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  );
}

export default MyOrder;
