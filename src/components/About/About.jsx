import React from "react";
import hurayraImage from "../../assets/hurayra-4.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-200">
        <section id="about" className="bg-cyan-50 -mt-6 z-10 rounded-b-4xl md:px-24 py-16  flex flex-col justify-center items-center">
      {/* Section Heading and Badge */}
      <h1 className="w-4/5 md:w-2/3 pt-6 text-xl md:text-3xl text-center font-semibold md:px-24 leading-8 md:leading-12 text-gray-800">
        Learn more about who I am and what drives me forward.
      </h1>
      <div className="relative border-1 w-full my-16 border-gray-300"></div>
      <p className="bg-white px-8 py-2 relative -top-20 text-sm font-semibold -rotate-12 rounded-4xl">About Me</p>

      {/* Content: Image + Text Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 px-6 md:px-0 mt-4 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={hurayraImage}
            alt="Abu Hurayra Khan"
            className="rounded-3xl w-72 h-72 object-cover filter grayscale hover:grayscale-0 transition duration-500 ease-in-out border-4 border-gray-200 hover:shadow-[0_0_30px_10px_rgba(34,211,238,0.6)]"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-600 leading-7 mb-4">
            Hello! I'm <span className="font-semibold text-cyan-600">Abu Hurayra Khan</span>, a passionate web developer currently pursuing a BSS in Economics at <span className="font-semibold">Govt. B. L. College, Khulna</span>.
          </p>
          <p className="text-gray-600 leading-7 mb-4">
            I specialize in creating responsive and dynamic digital experiences using <span className="font-semibold">React</span>, <span className="font-semibold">Tailwind CSS</span>, and the <span className="font-semibold">MERN Stack</span>. My focus is on clean code, intuitive UI/UX, and fullstack performance.
          </p>
          <p className="text-gray-600 leading-7">
            I love solving real-world problems and collaborating on impactful projects. My mission is to turn ideas into modern, user-friendly solutions.
          </p>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default About;
