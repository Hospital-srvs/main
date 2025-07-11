import '../../assets/css/Header.css'
import newlogo from '../../assets/images/logo/newlogo.png'
import { FaRegCalendarDays } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";
import services from '../../assets/api/services.json';
import { NavLink } from 'react-router-dom';

export const Header = () => {

    const openMenu = () => {
        
        const d = document.querySelector('.mobile-menu');

        d.style.display = 'flex'

    }

    const closeMenu = () => {

        const d = document.querySelector('.mobile-menu');

        d.style.display = 'none'

    }

    // openMenu()

    return<>
        <nav>
            <div className="insideNav">

                <NavLink to="/">
                    <img src={newlogo} alt="logo" className="logo" />
                </NavLink>

                <div className="menuLinks">
                    
                    <NavLink className="none" to="/">
                        <p>Home</p>
                    </NavLink>
                    <NavLink className="none" to="/about">
                        <p>About Us</p>
                    </NavLink>

                    <div className="drop-down">
                        <p>Services</p>

                        <div className="inside-drop-down">
                            
                            {
                                services.map((s, index)=>{

                                    const {content, id, image, subtitle, title} = s;


                                    return(

                                        <NavLink className="none" to={`/services/${title}`}>
                                            <p key={id}>
                                                {title}
                                            </p>

                                        </NavLink>

                                    )


                                })                                
                            }

                        </div>

                    </div>

                    <NavLink className="none" to="/doctors">
                        <p>Our Team</p>
                    </NavLink>
                    
                    <NavLink className="none" to="blog">
                        <p>Blogs</p>
                    </NavLink>

                    <NavLink className="none" to="/contact">
                        <p>Contact Us</p>
                        </NavLink>


                    <NavLink className="none" to="appointment">
                        <button className="appointment">
                            <p style={{color:"#F7A582"}}>Book Appointment</p>
                            <FaRegCalendarDays className='ba' />
                        </button>
                    </NavLink>

                </div>


                <div className="mobile-menu">
                    <div className="inside-mobile-menu">

                        <IoCloseCircleOutline className='close' onClick={closeMenu} />

                        <div className="menuLinks mobile-menu-links">

                           <NavLink className="none" to="/" onClick={closeMenu}>
                        <p>Home</p>
                    </NavLink>
                    <NavLink className="none" to="/about" onClick={closeMenu}>
                        <p>About Us</p>
                    </NavLink>

                    <div className="drop-down">
                        <p>Services</p>

                        <div className="inside-drop-down">
                            
                            {
                                services.map((s, index)=>{

                                    const {content, id, image, subtitle, title} = s;


                                    return(

                                        <NavLink className="none" to={`/services/${title}`} onClick={closeMenu}>
                                            <p key={id}>
                                                {title}
                                            </p>

                                        </NavLink>

                                    )


                                })                                
                            }

                        </div>

                    </div>

                    <NavLink className="none" to="/doctors" onClick={closeMenu}>
                        <p>Our Team</p>
                    </NavLink>
                    
                    <NavLink className="none" to="blog" onClick={closeMenu}>
                        <p>Blogs</p>
                    </NavLink>

                    <NavLink className="none" to="/contact" onClick={closeMenu}>
                        <p>Contact Us</p>
                        </NavLink>



                        </div>
                    </div>
                </div>

<NavLink className="none asw" to="appointment">

                <button className="appointment ">
                                <p>Book Appointment</p>
                                <FaRegCalendarDays className='ba' />
                </button>
</NavLink>

                <RxHamburgerMenu className='hamMenu' onClick={openMenu}/>

            </div>
        </nav>
    </>
}