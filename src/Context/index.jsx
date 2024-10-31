
import { createContext } from 'react';

// creacion del context global
const ShoppingCarContext = createContext()


// componente retorno el porvedor hace un grapper vive toda la aplicacion
export const ShoppingCarProvider = ({children}) => {
    return (
        <ShoppingCarContext.Provider>
            {children}
        </ShoppingCarContext.Provider>
    )
}