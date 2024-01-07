import {useState} from 'react'
import {LOGO_URL} from './../Utils/constants';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [btnName, setBtnName] = useState(true)
    return (
        <>
        <div className="flex justify-between items-center px-10 mb-10">
            <div className="logo-container">
                <img className="w-32" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul className='flex font-sans text-md font-semibold'>
                    <li className='px-4 py-3 cursor-pointer md:px-10'><Link className='hover:text-yellow-500' to="/">Home</Link></li>
                    <li className='px-4 py-3 cursor-pointer md:px-10'><Link className='hover:text-yellow-500' to="/about">About</Link></li>
                    <li className='px-4 py-3 cursor-pointer md:px-10'><Link className='hover:text-yellow-500' to="/contact">Contact</Link></li>
                    <li className='px-4 py-3 cursor-pointer md:px-10'><Link className='hover:text-yellow-500' to="/grocery">Grocery</Link></li>
                    <li className='px-4 py-3 cursor-pointer md:px-10'><Link className='hover:text-yellow-500' to="/card">Card</Link></li>
                    <button className='px-6 py-2 bg-yellow-300 rounded-lg' onClick={()=> setBtnName(!btnName)}>{btnName ? "Login" : "Logout"}</button>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header