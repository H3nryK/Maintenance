import React, { useEffect, useState } from "react";
import { Link, animatedScroll } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={isSticky ? 'sticky header' : 'header'}>
            <div className="container">
                <div className="header-content">
                    <a href="/" className="logo">
                        <h1>Portfolio</h1>
                    </a>
                    <nav className={isMenuOpen ? 'open navbar' : 'navbar'}>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? 'X' : 'O'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;