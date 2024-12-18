import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

// Componente de tarjeta de producto
const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext);

    // Función para mostrar el producto
    const showProduct = () => {
        context.setProductToShow(data);
        context.openProductDetail();
    };

    // Función para agregar productos al carrito
    const addProductsToCart = (event) => {
        event.stopPropagation();
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, data]);
        context.openCheckoutSideMenu();
        context.closeProductDetail();
    };

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.some(product => product.id === id);

        if (isInCart) {
            return (
                <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
                    <CheckIcon className='h-6 w-6 text-white' />
                </div>
            );
        } else {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={addProductsToCart}
                >
                    <PlusIcon className='h-6 w-6 text-black' />
                </div>
            );
        }
    };

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg shadow-lg' onClick={showProduct}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {data.category.name}
                </span>
                <img
                    className='w-full h-full object-cover rounded-lg'
                    src={data.images[0]}
                    alt={data.title}
                />
                {renderIcon(data.id)} {/* Cambiado a data.id */}
            </figure>
            <p className='flex justify-between px-2 pb-2'>
                <span className='text-sm font-light'>{data.title}</span>
                <span className='text-lg font-medium'>${data.price}</span>
            </p>
        </div>
    );
};

export default Card;
