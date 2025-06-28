import React from "react";
import hurayraImage from "../../assets/hurayra-4.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-16 px-6 md:px-24 flex flex-col md:flex-row items-center gap-12 rounded-4xl"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={hurayraImage}
          alt="Hurayra Khan"
          className="rounded-3xl w-72 h-72 object-cover filter grayscale hover:grayscale-0 transition duration-500 ease-in-out border-4 border-gray-200 hover:shadow-[0_0_30px_10px_rgba(34,211,238,0.6)]"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 leading-7 mb-4">
          Hello! I'm{" "}
          <span className="font-semibold text-cyan-600">Abu Hurayra Khan</span>, currently pursuing a BSS in Economics at{" "}
          <span className="font-semibold">Govt. B. L. College, Khulna, Bangladesh</span>.
        </p>
        <p className="text-gray-600 leading-7 mb-4">
          I’m a dedicated web developer passionate about building responsive and elegant digital experiences. I specialize in{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Tailwind CSS</span>, and fullstack development using the{" "}
          <span className="font-semibold">MERN stack</span>.
        </p>
        <p className="text-gray-600 leading-7">
          I love learning, creating, and collaborating on projects that make a real impact. Let’s build something exceptional together.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
