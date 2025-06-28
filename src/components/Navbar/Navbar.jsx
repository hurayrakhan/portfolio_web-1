import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router';

const Navbar = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("imhurayrakhan@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
    };

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="flex justify-between items-center bg-gray-200 z-50 sticky top-0  py-6 px-12 rounded-b-4xl">
            {/* CV + Copy section */}
            <div className="flex gap-4 justify-center text-sm items-center">
                <p className="text-sm">imhurayrakhan@gmail.com</p>

                {/* Copy Button */}
                <button
                    onClick={handleCopy}
                    disabled={copied}
                    className={`px-6 py-2 flex items-center gap-2 rounded-3xl bg-white hover:bg-cyan-300 text-black shadow-md transition duration-300 ease-in-out ${
                        copied ? 'shadow-[0_0_20px_5px_rgba(34,211,238,0.6)]' : 'hover:shadow-[0_0_20px_5px_rgba(34,211,238,0.6)]'
                    }`}
                >
                    {copied ? (
                        <>
                            <FiCheck className="text-green-600" />
                            Copied
                        </>
                    ) : (
                        'Copy'
                    )}
                </button>

                {/* CV Button */}
                <a
                    href="/cv.pdf" // Update path if needed
                    download
                    className="px-8 py-2 rounded-3xl bg-white hover:bg-cyan-300 text-black shadow-md transition duration-300 ease-in-out hover:shadow-[0_0_20px_5px_rgba(34,211,238,0.6)]"
                >
                    Resume
                </a>
            </div>

            {/* Navigation Links with smooth scroll */}
            <ul className="flex gap-1 text-sm ">
                {['home', 'about', 'services', 'contact'].map((section) => (
                    <li key={section}>
                        <button
                            onClick={() => handleScroll(section)}
                            className="relative text-black hover:text-cyan-600 transition duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>  /
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
