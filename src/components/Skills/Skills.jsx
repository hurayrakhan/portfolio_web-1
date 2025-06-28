import React from 'react';
import { motion } from 'framer-motion';
import html from '../../assets/logos/html.png';
import css from '../../assets/logos/css.png';
import js from '../../assets/logos/js.png';
import react from '../../assets/logos/react.png';
import tailwind from '../../assets/logos/tailwind.png';
import node from '../../assets/logos/node.png';
import express from '../../assets/logos/express.png';
import mongodb from '../../assets/logos/mongodb.png';
import firebase from '../../assets/logos/firebase.png';
import postman from '../../assets/logos/postman.png';
import git from '../../assets/logos/git.png';
import github from '../../assets/logos/github.png';
import netlify from '../../assets/logos/netlify.png';
import vercel from '../../assets/logos/vercel.png';
import figma from '../../assets/logos/figma.png';
import materialui from '../../assets/logos/materialui.png';

const SkillCategory = ({ title, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="
  group relative bg-white rounded-4xl p-6 shadow-md
  hover:shadow-[0_0_25px_5px_rgba(34,211,238,0.3)] transition duration-500 hover:scale-[1.02]
  border-2 border-transparent
  before:absolute before:-inset-1 before:rounded-4xl
  before:bg-gradient-to-r before:from-cyan-400 before:via-blue-400 before:to-purple-600
  before:opacity-0 before:transition-opacity before:duration-500
  group-hover:before:opacity-100
  before:pointer-events-none
"

    >
        {/* Title with animated underline on hover */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center border-b-2 border-gray-300 pb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-700 transition-all duration-300">
            {title}
        </h3>

        {/* Skills grid */}
        <div className="grid grid-cols-3 gap-4 md:grid-cols-4 justify-items-center">
            {skills.map(({ name, logo }) => (
                <motion.div
                    key={name}
                    whileHover={{ y: -6, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col items-center transition duration-300"
                >
                    <motion.img
                        src={logo}
                        alt={name}
                        className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition duration-300"
                        whileHover={{ scale: 1.2 }}
                    />
                    <p className="text-xs text-gray-700 mt-2">{name}</p>
                </motion.div>
            ))}
        </div>
    </motion.div>
);


const Skills = () => {
    return (
        <section id="skills" className="bg-gray-200 py-16 px-6 md:px-24 flex flex-col items-center overflow-hidden">
            <h1 className="w-4/5 md:w-2/3 text-xl md:text-3xl text-center font-semibold leading-8 md:leading-12 text-gray-800">
                Empowered by technologies that build modern and scalable web applications.
            </h1>
            <div className="relative border-1 w-full my-16 border-gray-300"></div>
            <p className="bg-white px-8 py-2 relative -top-20 text-sm font-semibold -rotate-12 rounded-4xl">Skills</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                <SkillCategory
                    title="Frontend"
                    delay={0.1}
                    skills={[
                        { name: 'HTML', logo: html },
                        { name: 'CSS', logo: css },
                        { name: 'JavaScript', logo: js },
                        { name: 'React', logo: react },
                        { name: 'Tailwind', logo: tailwind },
                        { name: 'Material UI', logo: materialui },
                    ]}
                />
                <SkillCategory
                    title="Backend"
                    delay={0.2}
                    skills={[
                        { name: 'Node.js', logo: node },
                        { name: 'Express.js', logo: express },
                        { name: 'MongoDB', logo: mongodb },
                        { name: 'Firebase', logo: firebase },
                    ]}
                />
                <SkillCategory
                    title="Tools & Platforms"
                    delay={0.3}
                    skills={[
                        { name: 'Git', logo: git },
                        { name: 'GitHub', logo: github },
                        { name: 'Postman', logo: postman },
                        { name: 'Netlify', logo: netlify },
                        { name: 'Vercel', logo: vercel },
                        { name: 'Figma', logo: figma },
                    ]}
                />
            </div>
        </section>
    );
};

export default Skills;
