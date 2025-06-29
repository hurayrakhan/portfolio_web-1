import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id='contact' className="bg-gray-200 flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="rounded-t-4xl bg-cyan-50 w-full py-32 flex flex-col justify-center items-center px-4"
      >
        {/* Emoji bubble */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="px-6 py-6 h-24 w-24 rounded-full text-4xl bg-gray-200 grayscale hover:grayscale-0 shadow-md transition"
        >
          🤝
        </motion.p>

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-gray-800 w-4/5 md:w-1/2 text-center leading-12 py-8"
        >
          Tell me about your next project
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="mailto:imhurayrakhan@gmail.com"
            className="px-8 py-3 bg-cyan-300 border-2 border-cyan-400 text-black rounded-4xl font-medium
              transition duration-300 ease-in-out hover:bg-white hover:text-black hover:shadow-[0_0_20px_5px_rgba(34,211,238,0.6)]"
          >
            Email Me
          </a>
          <a
            href="https://wa.me/8801601770023"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-4xl bg-white border-2 border-gray-300 text-black font-medium
    transition duration-300 ease-in-out
    hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_20px_5px_rgba(34,211,238,0.6)]"
          >
            WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
