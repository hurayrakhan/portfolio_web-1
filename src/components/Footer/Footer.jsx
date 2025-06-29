import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t-2 border-gray-200 mx-12">
                <div className="flex justify-between items-center py-12 text-sm">
                    <p>© 2025 All rights reserved.</p>
                    <ul className="flex gap-3">
                        <li>Home</li>
                        <li>/</li>
                        <li>About</li>
                        <li>/</li>
                        <li>Services</li>
                        <li>/</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </footer>
    );
};

export default Footer;