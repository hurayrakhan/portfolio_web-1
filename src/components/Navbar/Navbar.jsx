import React, { useState, useEffect } from 'react';
import { FiCheck, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("imhurayrakhan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMenuOpen(false); // close menu on mobile after click
    }
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'services', 'education', 'contact'];
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

  const navLinks = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

  return (
    <nav className="bg-gray-200 z-50 sticky top-0 py-6 px-6 md:px-12 flex justify-between items-center rounded-b-4xl">
      {/* Left: Email, Copy, Resume */}
      <div className="flex gap-4 justify-center text-sm items-center">
        <p className="text-sm hidden sm:block">imhurayrakhan@gmail.com</p>

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

        <a
          href="/cv.pdf"
          download
          className="px-8 py-2 rounded-3xl bg-white hover:bg-cyan-300 text-black shadow-md transition duration-300 ease-in-out hover:shadow-[0_0_20px_5px_rgba(34,211,238,0.6)]"
        >
          Resume
        </a>
      </div>

      {/* Right: Desktop Nav */}
      <ul className="hidden lg:flex gap-1 text-sm">
        {navLinks.map((section) => (
          <li key={section}>
            <button
              onClick={() => handleScroll(section)}
              className={`relative transition duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                activeSection === section
                  ? 'text-cyan-600 after:w-full after:bg-cyan-400'
                  : 'text-black hover:text-cyan-600 after:w-0 after:bg-cyan-400 hover:after:w-full'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>{' '}
            /
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black text-2xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[100%] right-6 bg-white shadow-lg rounded-3xl p-6 w-56 flex flex-col gap-4 z-50 md:hidden">
          {navLinks.map((section) => (
            <button
              key={section}
              onClick={() => handleScroll(section)}
              className={`text-left transition duration-300 ease-in-out ${
                activeSection === section ? 'text-cyan-600 font-semibold' : 'text-black hover:text-cyan-600'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
