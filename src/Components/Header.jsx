import {useContext, useState} from 'react'
import {LOGO_URL} from './../Utils/constants';
import { Link } from 'react-router-dom';
import UserContext from '../Utils/UserContext';
import { useSelector } from 'react-redux';
import {CART} from "../Utils/constants"

export const Header = () => {
    const [btnName, setBtnName] = useState(true)
    const cartItems = useSelector((store)=> store.cart.items);


    return (
        <>
        <div className="flex justify-between items-center px-10 mb-10">
            <div className="logo-container">
                <img className="w-32" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul className='flex font-sans items-center text-md font-semibold'>
                    <li className='px-4 py-3 cursor-pointer md:px-10'><Link className='hover:text-yellow-500' to="/">Home</Link></li>
                    <li className='px-4 py-3 cursor-pointer md:px-10'><Link className='hover:text-yellow-500' to="/about">About</Link></li>
                    <li className='px-4 py-3 cursor-pointer md:px-10'><Link className='hover:text-yellow-500' to="/contact">Contact</Link></li>
                    <li className='px-4 py-3 cursor-pointer md:px-10'><Link className='hover:text-yellow-500' to="/grocery">Grocery</Link></li>
                    <li className='py-3 cursor-pointer md:px-5 me-5' >
                        <Link className='hover:text-yellow-500' to="/card">
                            <img src={CART} className='bg-white w-[2.5rem] relative' alt="" /> 
                            <span className='absolute top-6 px-2 bg-yellow-200 rounded-full right-[160px]'>{cartItems.length}</span>
                            </Link>
                        </li>
                    {/* <li className='px-4 py-3 cursor-pointer md:px-10'><Link className='hover:text-yellow-500' to="/card">Cart - {cartItems.length} items</Link></li> */}
                    <button className='px-6 py-2 bg-yellow-300 rounded-lg' onClick={()=> setBtnName(!btnName)}>{btnName ? "Login" : "Logout"}</button>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header