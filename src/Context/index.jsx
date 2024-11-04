import { createContext, useState } from 'react';

// creacion del context global
export const ShoppingCartContext = createContext()

// componente retorno el porvedor hace un grapper vive toda la aplicacion
export const ShoppingCartProvider = ({children}) => {
    // Shoping Cart . Increment quantitu
    const [count, setCount] = useState(0)

    // Product Datail  . Open/Close
    const [isProductDetailOpen, setIsProductDatailOpen] = useState(false)
    const openProductDetail = () => setIsProductDatailOpen(true) 
    const closeProductDetail = () => setIsProductDatailOpen(false)

    // Product Detail . show product
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}