import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Hero/Banner';
import Contact from '../components/Contact/Contact';

const Portfolio = () => {
    return (
        <div className=''>
             
            <Navbar></Navbar>
            <header className="">
               
                
                
            </header>
            <Banner></Banner>

            
                {/* Brands */}
                <section className="bg-gray-200">
                    <div className="rounded-b-4xl bg-white flex justify-between items-center md:gap-8 py-6 md:py-12 px-4 md:px-24">
                        {[...Array(5)].map((_, index) => (
                            <img
                                key={index}
                                src="assets/cola.png"
                                alt=""
                                className="h-24 w-24 md:h-32 md:w-32 object-cover"
                            />
                        ))}
                    </div>
                </section>

                {/* Collaborate */}
                <section className="md:px-24 py-16 bg-gray-200 flex flex-col justify-center items-center">
                    <h1 className="w-4/5 md:w-2/3 text-xl md:text-3xl text-center font-semibold md:px-24 leading-8 md:leading-12 text-gray-800">
                        Collaborate with brands and agencies to create impactful results.
                    </h1>
                    <div className="relative border-1 w-full my-16 border-gray-300"></div>
                    <p className="bg-white px-8 py-2 relative -top-20 text-sm font-semibold -rotate-12 rounded-4xl">Services</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-16">
                        {[...Array(4)].map((_, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-items-start items-start gap-3 px-8 py-12 rounded-4xl hover:bg-white"
                            >
                                <p className="text-4xl grayscale -ml-2">❤️</p>
                                <h1 className="text-lg font-semibold text-gray-800">UI/UX Design</h1>
                                <p className="text-sm text-gray-500">
                                    Designing user-friendly interfaces for web and mobile applications.
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact */}
                <Contact></Contact>
                
            

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
        </div>
    );
};

export default Portfolio;
