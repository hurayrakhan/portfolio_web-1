import React from 'react';
import hurayra3 from '../../assets/hurayra-3.jpg';
import hiGif from '../../assets/hi.gif';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";




const Banner = () => {
    return (


        <div className=" h-[calc(100vh-84px)] pt-20 bg-gray-200 rounded-b-4xl -mt-8">

            {/* Content on top */}
            <div className="flex flex-col justify-center items-center pb-24">
                <div>
                    <img
                        src={hurayra3}
                        alt="Hurayra"
                        className="relative rounded-full h-32 w-32 object-cover border-4 border-white filter grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:shadow-[0_0_30px_10px_rgba(34,211,238,0.6)]"
                    />

                    <div className="pl-3 py-2 w-32 bg-white text-xs rounded-4xl -rotate-12 relative -top-24 left-24 flex gap-2">
                        <h1>Hurayra Khan</h1>
                        <img className="w-3 h-3" src={hiGif} alt="" />
                    </div>
                </div>
                <div className="text-center flex flex-col gap-4 justify-center items-center">
                    <div className="text-center">
                        <h3 className='text-xl text-gray-700 leading-8'>
                            I'm{' '}
                            <span className="font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-purple-900 text-transparent bg-clip-text">
                                Abu Hurayra Khan
                            </span>
                            , a
                        </h3>
                        <div className="text-left w-[220px] md:w-[300px] mx-auto">
                            <span className="text-gray-800 text-2xl ml-6 font-bold">
                                <Typewriter
                                    words={['Junior Web-Developer', 'MERN stack developer']}
                                    loop={true}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </div>
                        
                        
                    </div>
                    <motion.p
                            className="text-base w-4/5 md:w-2/3 md:text-lg text-gray-600 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Crafting modern web experiences with clean code and creative design. Let's build something exceptional together.
                        </motion.p>
                    <a
                        className="mt-6 px-12 py-3 rounded-3xl bg-gray-800 text-white hover:bg-gray-600"
                        href="#contact"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Banner;
