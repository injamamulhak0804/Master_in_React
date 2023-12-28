import {useState} from 'react'
import {LOGO_URL} from './../Utils/constants';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [btnName, setBtnName] = useState(true)
    return (
        <>
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/card">Card</Link></li>
                    <button className='btn-search' onClick={()=> setBtnName(!btnName)}>{btnName ? "Login" : "Logout"}</button>
                </ul>
            </div>
        </div>
        <hr className='line' />
        </>
    )
}

export default Header