import { createContext, useState } from 'react';

// creacion del context global
export const ShoppingCartContext = createContext()

// componente retorno el porvedor hace un grapper vive toda la aplicacion
export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}