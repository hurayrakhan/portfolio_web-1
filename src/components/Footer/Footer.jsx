import React, { useState, useEffect } from 'react';


const Footer = () => {
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const handleScrollPosition = () => {
            const sections = ['home', 'about', 'services', 'contact'];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScrollPosition);
        return () => window.removeEventListener('scroll', handleScrollPosition);
    }, []);

    const links = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

    return (
        <div className=' bg-cyan-50'>
            <footer className="border-t-2 border-gray-200 mx-6 md:mx-12">
                <div className="flex flex-col md:flex-row justify-between items-center py-12 text-sm gap-6 md:gap-0">
                    <div className='flex'>
                        <p className="text-gray-600 mr-1">© 2025 All rights reserved.| </p><p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700 ml-1'><a href="https://www.linkedin.com/in/hurayrakhan/" target='_blank'> Abu Hurayra Khan</a></p>
                    </div>

                    <ul className="flex flex-wrap gap-3 items-center justify-center">
                        {links.map((link, idx) => (
                            <React.Fragment key={link}>
                                <li>
                                    <button
                                        onClick={() => handleScroll(link)}
                                        className={`relative capitalize transition duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${activeSection === link
                                                ? 'text-cyan-600 after:w-full after:bg-cyan-400'
                                                : 'text-gray-700 hover:text-cyan-600 after:w-0 after:bg-cyan-400 hover:after:w-full'
                                            }`}
                                    >
                                        {link}
                                    </button>
                                </li>
                                {idx !== links.length - 1 && <li className="text-gray-400">/</li>}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>

            </footer>
        </div>
    );
};

export default Footer;
