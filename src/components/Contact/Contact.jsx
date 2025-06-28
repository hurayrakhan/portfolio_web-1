import React from 'react';

const Contact = () => {
    return (
        <section id='contact' className="bg-gray-200 flex flex-col justify-center items-center">
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
    );
};

export default Contact;