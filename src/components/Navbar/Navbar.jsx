import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-12 py-12">
            {/* CV section */}
            <div className="flex gap-4 justify-center text-sm items-center">
                <p className="text-sm">imhurayrakhan@gmail.com</p>
                <a className="px-8 py-2 rounded-3xl bg-white hover:bg-green-300" href="#">Copy</a>
                <a className="px-8 py-2 rounded-3xl bg-white hover:bg-green-300" href="#">CV</a>
            </div>
            {/* Links section */}
            <div>
                <ul className="flex gap-3 text-sm">
                    <li><a href="#">Home</a></li>
                    <li>/</li>
                    <li><a href="#">About</a></li>
                    <li>/</li>
                    <li><a href="#">Services</a></li>
                    <li>/</li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;