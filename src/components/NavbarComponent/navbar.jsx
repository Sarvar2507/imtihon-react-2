import './navbar.css'

import navbarimg from '../../assets/Seach (1).png'
import navbarimg2 from '../../assets/List Manu.png'
import navbarimg34 from '../../assets/List Manu (1).png'
import navbarimg5 from '../../assets/log out.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    const [open, setOpen] = useState(false)

    const HandleOpen = () => {
        setOpen(true);
    }
    const HandleClose = () => {
        setOpen(false);
    }
    return (
        <>
        <header className='header'>
            <nav className='navbar'>
                <div className="container">
                    <ul className="navbar_ul">
                        <li className="navbar_li">
                            <img src={navbarimg} alt=""/>                            
                        </li>
                        <li className="navbar_li">
                            <img src={navbarimg2} alt=""/>
                        </li>
                        <li className="navbar_li">
                            <img src={navbarimg34} alt=""/>
                        </li>
                        <li className="navbar_li">
                            <img className='nav_img' onClick={HandleOpen} src={navbarimg5} alt="" />
                            {open ? <div className='modal_nav'>
                                <input type="text" className='modal_input'/>
                                <div className="box_text">
                                <NavLink to="/">
                                    <p className="modal_text">Home</p>
                                </NavLink>
                                <p className="modal_text">Message</p>
                                <p className='modal_text' onClick={HandleClose}>Close</p>
                                </div>
                            </div> : null}
                        </li>
                        <li className="navbar_li">
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        </>
    )
}
export default Navbar