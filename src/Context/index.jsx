import { createContext, useState } from 'react';

// creacion del context global
export const ShoppingCartContext = createContext()

// componente retorno el porvedor hace un grapper vive toda la aplicacion
export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDatailOpen] = useState(false)
    const openProductDetail = () => setIsProductDatailOpen(true) 
    const closeProductDetail = () => setIsProductDatailOpen(false)


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}