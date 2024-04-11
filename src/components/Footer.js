import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">About Me</h3>
                        <p>
                        I'm always eager to learn and grow, I would be excited to bring my expertise
                        to your project.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">Contact Me</h3>
                        <p>
                            Email: se.henrykim@gmail.com
                            <br />
                            Phone: +254705618424
                        </p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy;2024 My Portfolio || All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;