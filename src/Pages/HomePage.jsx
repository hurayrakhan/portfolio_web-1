import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <header className="bg-gray-200 rounded-b-4xl h-screen">
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

                {/* Hero Section */}
                <div className="mt-12">
                    <div className="pb-24 flex flex-col justify-center items-center">
                        <div>
                            <img
                                src="assets/hurayra-3.jpg"
                                alt=""
                                className="relative rounded-full h-32 w-32 object-cover filter grayscale border-4 border-white"
                            />
                            <div className="pl-3 py-2 w-32 bg-white text-xs rounded-4xl -rotate-12 relative -top-24 left-24 flex gap-2">
                                <h1>Hurayra Khan</h1>
                                <img className="w-3 h-3" src="assets/hi.gif" alt="" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center text-center">
                            <div className="flex flex-col gap-4 justify-center items-center">
                                <h1 className="text-3xl md:text-5xl font-bold text-gray-700 w-2/3 md:w-1/2 leading-14">
                                    Building digital products, brands, and experience.
                                </h1>
                                <a className="mt-6 px-12 py-3 rounded-3xl bg-gray-800 text-white hover:bg-gray-600" href="#">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main>
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
                <section className="bg-gray-200 flex flex-col justify-center items-center">
                    <div className="rounded-t-4xl bg-white w-full py-32 flex flex-col justify-center items-center">
                        <p className="px-6 py-6 h-24 w-24 rounded-full text-4xl bg-gray-200 grayscale-75">🤝</p>
                        <p className="text-2xl md:text-4xl font-bold md:font-bold text-gray-800 w-4/5 md:w-1/2 text-center leading-12 py-8">
                            Tell me about your next project
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="px-8 py-3 bg-black border-2 hover:bg-white hover:border-gray-400 text-white hover:text-black rounded-4xl"
                            >
                                Email Me
                            </a>
                            <a
                                href="#"
                                className="px-8 py-3 bg-white border-2 border-gray-400 hover:bg-gray-900 hover:text-white rounded-4xl"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </main>

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
