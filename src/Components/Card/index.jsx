import { PlusIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

// Componente de tarjeta de producto
const Card = ({ data }) => { // Asegúrate de recibir "data" como prop
    const context = useContext(ShoppingCartContext);

    // Función para mostrar el producto
    const showProduct = () => {
        context.setProductToShow(data); // Establecer el producto a mostrar
        context.openProductDetail(); // Abrir el detalle del producto
    };
  
    return (
        <div 
            className='bg-white cursor-pointer w-56 h-60 rounded-lg shadow-lg'
            onClick={showProduct}> {/* Usar la función showProduct */}
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {data.category.name} {/* Nombre de la categoría */}
                </span>
                <img
                    className='w-full h-full object-cover rounded-lg'
                    src={data.images[0]} // Primera imagen del producto
                    alt={data.title} // Título del producto como alt
                />
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(e) => {
                        e.stopPropagation(); // Prevenir que el clic burbujee al div del Card
                        context.setCount(context.count + 1); // Incrementar el contador
                    }}>
                    <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </div>
            </figure>
            <p className='flex justify-between px-2 pb-2'>
                <span className='text-sm font-light'>{data.title}</span>
                <span className='text-lg font-medium'>${data.price}</span>
            </p>
        </div>
    );
};

export default Card;
