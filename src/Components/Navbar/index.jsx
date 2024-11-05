import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline"; 
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

    const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeSytle = 'underline underline-offset-4'

    // Definimos la función para alternar el menú lateral
  const toggleCheckoutSideMenu = () => {
    if (context.isCheckoutSideMenuOpen) {
      context.closeCheckoutSideMenu();
    } else {
      context.openCheckoutSideMenu();
    }
  };

    return (
        <nav className="flex justify-between items-center fixed  z-10 top-0 w-full py-5 px-8 text-sm font-light ">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/"
                    className ={({ isActive}) =>
                        isActive ? activeSytle: undefined
                    }>
                
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/Clothes"
                    className ={({ isActive}) =>
                        isActive ? activeSytle: undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/Furnitus"
                    className ={({ isActive}) =>
                        isActive ? activeSytle: undefined
                    }>
                        Furnitus
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/Toys"
                    className ={({ isActive}) =>
                        isActive ? activeSytle: undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/Others"
                    className ={({ isActive}) =>
                        isActive ? activeSytle: undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60 flex">
                    <EnvelopeIcon className="h-6 w-6 text-black inline" />
                    Jose@platzi.com
                </li>
                <li className='flex'>
                    <NavLink 
                    to="/my-orders"
                    className ={({ isActive}) =>
                        isActive ? activeSytle: undefined
                    }>
                        <ShoppingBagIcon className="h-6 w-6 text-black inline"/>
                        My Orders
                    </NavLink>
                </li>
                <li className='flex'>
                    <NavLink 
                    to="/my-account" 
                    className ={({ isActive}) =>
                        isActive ? activeSytle: undefined
                    }>
                        <UserCircleIcon className="h-6 w-6 text-black inline" />
                        My Account
                    </NavLink>
                </li>
                <li className='flex'>
                    <NavLink 
                    to="/sing-in"
                    className ={({ isActive}) =>
                        isActive ? activeSytle: undefined
                    }>
                        <ArrowRightOnRectangleIcon className="h-6 w-6 text-black inline" />
                        Sign In
                    </NavLink>
                </li>
                <li className="flex cursor-pointer" onClick={toggleCheckoutSideMenu}>
                    <ShoppingCartIcon className="h-6 w-6 text-black inline" />
                    {context.count}
                </li>
            </ul>
        </nav>
    )
}


export default Navbar