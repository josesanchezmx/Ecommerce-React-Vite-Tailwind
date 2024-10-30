import { NavLink } from "react-router-dom";


const Navbar = () => {
    const activeSytle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center  z-10 w-full py-5 px-8 text-sm font-light ">
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
                <li className="text-black/60">
                    Jose@platzi.com
                </li>
                <li>
                    <NavLink 
                    to="/my-orders"
                    className ={({ isActive}) =>
                        isActive ? activeSytle: undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/my-account"
                    className ={({ isActive}) =>
                        isActive ? activeSytle: undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/sing-in"
                    className ={({ isActive}) =>
                        isActive ? activeSytle: undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>
        </nav>
    )
}


export default Navbar