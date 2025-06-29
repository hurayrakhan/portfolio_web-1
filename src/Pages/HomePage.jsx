import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Hero/Banner';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer/Footer';

const Portfolio = () => {
    return (
        <div className=''>
             
            <Navbar></Navbar>
            <header className="">
               
                
                
            </header>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Experience></Experience>

            {/* Contact */}
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;
