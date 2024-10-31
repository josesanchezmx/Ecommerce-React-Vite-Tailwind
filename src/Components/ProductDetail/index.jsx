import { XMarkIcon } from "@heroicons/react/24/outline";
import './styles.css'

const ProductDetail = () => {
    return (
        <aside className='product-datail flex flex-col fixed right-0 border border-black rounded-lg bg-white '>
            <div className='flex justify-between items-center p-6'>
                <h2 className='text-xl font-medium'>Product Detail</h2>
                <div>
                <XMarkIcon className=' h-6 w-6 text-black'></XMarkIcon>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail