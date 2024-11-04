import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import './styles.css';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white shadow-lg w-80 h-auto max-h-full overflow-y-auto`}>
            <div className='flex justify-between items-center p-4 border-b'>
                <h2 className='text-xl font-medium'>Detalles del Producto</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={context.closeProductDetail}></XMarkIcon>
                </div>
            </div>
            {/* Detalles del producto */}
            <div>
                {context.productToShow.title && (
                    <>
                        <figure className='px-6'>
                            <img
                                className='w-full h-full rounded-lg'
                                src={context.productToShow.images} // Imagen del producto
                                alt={context.productToShow.title}
                            />
                        </figure>
                        <p className='flex flex-col p-6'>
                            <span className='font-medium text-2xl'>${context.productToShow.price}</span>
                            <span className='font-medium text-md'>{context.productToShow.title}</span>
                            <span className='font-medium text-sm'>{context.productToShow.description}</span>
                        </p>
                    </>
                )}
            </div>
        </aside>
    );
};

export default ProductDetail;
