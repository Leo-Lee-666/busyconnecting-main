import React, { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navigate = useNavigate();

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
        setIsDropdownOpen(false);
    };

    const handleAboutClick = () => {
        closeNav();
        if (window.location.pathname === '/') {
            const aboutSection = document.getElementById('about-section');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const aboutSection = document.getElementById('about-section');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <header>
            <a className="logo" href="/">BUSYCONNECTING</a>
            <button className="nav-toggle" onClick={toggleNav}>
                ☰
            </button>
            <nav>
                <ul className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
                    <li>
                        <a href="#about" onClick={handleAboutClick}>About Us</a>
                    </li>
                    <li className="dropdown">
                        <a
                            href="#services"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown();
                            }}
                        >
                            Services
                        </a>
                        <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                            <li><a href="/grant" onClick={closeNav}>Grant</a></li>
                            <li><a href="/tender" onClick={closeNav}>Tender</a></li>
                            <li><a href="/sdm" onClick={closeNav}>Strategic Digital Marketing</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/blog" onClick={closeNav}>Blogs</Link>
                    </li>
                    <li className="mobile-only">
                        <Link to="/contact" className="contact-btn" onClick={closeNav}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
            {/* <Link to="/contact" className="contact-btn desktop-only">Contact Us</Link> */}
        </header>
    );
}

export default Header;
