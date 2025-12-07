import { useState } from "react";
import "../../assets/css/Header.css";
import newlogo from "../../assets/images/logo/newlogo.png";
import { FaRegCalendarDays } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";
import services from "../../assets/api/services.json";
import { NavLink } from "react-router-dom";

export const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    const openMenu = () => {
        setMobileMenuOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <>
            <nav>
                <div className="insideNav">

                    {/* LOGO */}
                    <NavLink to="/">
                        <img src={newlogo} alt="logo" className="logo" />
                    </NavLink>

                    {/* DESKTOP MENU */}
                    <div className="menuLinks">

                        <NavLink to="/">
                            <p>Home</p>
                        </NavLink>

                        <NavLink to="/about">
                            <p>About Us</p>
                        </NavLink>

                        {/* Desktop dropdown */}
                        <div className="drop-down">
                            <p>Services</p>

                            <div className="inside-drop-down">
                                {services.map(({ id, title }) => (
                                    <NavLink key={id} to={`/services/${title}`}>
                                        <p>{title}</p>
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <NavLink to="/doctors">
                            <p>Our Team</p>
                        </NavLink>

                        <NavLink to="/blog">
                            <p>Blogs</p>
                        </NavLink>

                        <NavLink to="/contact">
                            <p>Contact Us</p>
                        </NavLink>

                        <NavLink to="/appointment">
                            <button className="appointment">
                                <p style={{ color: "#F7A582" }}>Book Appointment</p>
                                <FaRegCalendarDays />
                            </button>
                        </NavLink>

                    </div>

                    {/* MOBILE MENU */}
                    <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
                        <div className="inside-mobile-menu">

                            {/* Close button */}
                            <IoCloseCircleOutline className="close" onClick={closeMenu} />

                            <div className="mobile-menu-links">

                                <NavLink to="/" onClick={closeMenu}>
                                    <p>Home</p>
                                </NavLink>

                                <NavLink to="/about" onClick={closeMenu}>
                                    <p>About Us</p>
                                </NavLink>

                                {/* Mobile dropdown toggle */}
                                <div
                                    className="drop-down"
                                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                >
                                    <p>Services</p>

                                    <div
                                        className="inside-drop-down"
                                        style={{ display: mobileDropdownOpen ? "block" : "none" }}
                                    >
                                        {services.map(({ id, title }) => (
                                            <NavLink
                                                key={id}
                                                to={`/services/${title}`}
                                                onClick={closeMenu}
                                            >
                                                <p>{title}</p>
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>

                                <NavLink to="/doctors" onClick={closeMenu}>
                                    <p>Our Team</p>
                                </NavLink>

                                <NavLink to="/blog" onClick={closeMenu}>
                                    <p>Blogs</p>
                                </NavLink>

                                <NavLink to="/contact" onClick={closeMenu}>
                                    <p>Contact Us</p>
                                </NavLink>

                            </div>
                        </div>
                    </div>

                    {/* SMALL BUTTON + HAMBURGER */}
                    <NavLink to="/appointment" className="asw">
                        <button className="appointment">
                            <p>Book Appointment</p>
                            <FaRegCalendarDays />
                        </button>
                    </NavLink>

                    <RxHamburgerMenu className="hamMenu" onClick={openMenu} />

                </div>
            </nav>
        </>
    );
};
