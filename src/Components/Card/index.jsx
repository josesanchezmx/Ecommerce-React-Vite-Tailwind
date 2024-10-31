import { PlusIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

// hook
const Card = (data) => {
    const context = useContext(ShoppingCartContext); // Asegúrate de que el nombre sea "context"

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg shadow-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {data.data.category.name} {/* Nombre de la categoría */}
                </span>
                <img
                    className='w-full h-full object-cover rounded-lg'
                    src={data.data.images[0]} // Primera imagen del producto
                    alt={data.data.title} // Título del producto como alt
                />
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={() => context.setCount(context.count + 1)}> {/* Asegúrate de usar "context" aquí */}
                    <PlusIcon className=' h-6 w-6 text-black'></PlusIcon>
                </div>
            </figure>
            <p className='flex justify-between px-2 pb-2'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    );
};

export default Card;
