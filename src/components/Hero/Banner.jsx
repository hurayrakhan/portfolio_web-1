import React from 'react';
import hurayra3 from '../../assets/hurayra-3.jpg';
import hiGif from '../../assets/hi.gif';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion"; // ✅ Added framer-motion

const Banner = () => {

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="h-[calc(100vh-84px)] pt-20 bg-gray-200 rounded-b-4xl -mt-8 overflow-hidden">
            {/* Content Section */}
            <div className="flex flex-col justify-center items-center pb-24">

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={hurayra3}
                        alt="Hurayra"
                        className="rounded-full h-32 w-32 object-cover border-4 border-white filter grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:shadow-[0_0_30px_10px_rgba(34,211,238,0.6)]"
                    />
                </motion.div>

                {/* Floating Name Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pl-3 py-2 w-32 bg-white text-xs rounded-4xl -rotate-12 relative -top-24 left-24 flex gap-2 shadow-md"
                >
                    <h1 className="font-semibold">Hurayra Khan</h1>
                    <img className="w-3 h-3" src={hiGif} alt="waving" />
                </motion.div>

                {/* Text Content */}
                <div className="text-center flex flex-col gap-4 justify-center items-center">

                    {/* Intro Line */}
                    <h3 className="text-xl text-gray-700 leading-8">
                        I'm{' '}
                        <span className="font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-purple-900 text-transparent bg-clip-text">
                            Abu Hurayra Khan
                        </span>
                        , a
                    </h3>

                    {/* Typewriter Effect */}
                    <div className="text-left w-[220px] md:w-[300px] mx-auto">
                        <span className="text-gray-800 text-2xl ml-6 font-bold">
                            <Typewriter
                                words={['Junior Web Developer', 'MERN Stack Developer']}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </div>

                    {/* Framer Motion Animated Description */}
                    <motion.p
                        className="text-base w-4/5 md:w-2/3 md:text-lg text-gray-600 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        Crafting modern web experiences with clean code and creative design. Let’s build something exceptional together.
                    </motion.p>

                    {/* Contact Button */}
                    <motion.a
                        
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleScroll("contact")}
                        className="mt-4 px-8 py-2 rounded-3xl bg-white hover:bg-cyan-300 text-black hover:text-white shadow-md transition duration-300 ease-in-out hover:shadow-[0_0_20px_5px_rgba(34,211,238,0.6)]"
                    >
                        Contact
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
