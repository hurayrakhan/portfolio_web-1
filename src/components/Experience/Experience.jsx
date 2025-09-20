import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const experiences = [
    {
        type: "education",
        title: "BSS in Economics",
        subtitle: "Govt BL College, Khulna",
        date: "2021 - Present",
        icon: <FaGraduationCap size={28} />,
    },
    {
        type: "experience",
        title: "Frontend Developer Intern",
        subtitle: "Thinqh Technologies",
        date: "2025 - present",
        icon: <FaBriefcase size={28} />,
    },
    {
        type: "experience",
        title: "MERN Stack Developer (Freelance)",
        subtitle: "Multiple Clients",
        date: "2025 - Present",
        icon: <FaBriefcase size={28} />,
    },
];

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative bg-white rounded-3xl p-8 shadow-md w-full max-w-3xl
        flex flex-col
        grayscale hover:grayscale-0
        transition duration-300 ease-in-out
        hover:brightness-105 hover:shadow-[0_0_25px_6px_rgba(34,211,238,0.35)]
        ml-12"
            style={{ minHeight: "130px" }}
        >
            {/* Small circle (ball) aligned on vertical line */}
            <div className="absolute left-[-36px] top-12 w-5 h-5 rounded-full bg-cyan-400 shadow-lg" />

            {/* Icon at top-left inside the card */}
            <div
                className="absolute z-50 top-6 left-6 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center
    transition duration-300 ease-in-out
    grayscale group-hover:grayscale-0 group-hover:brightness-125  group-hover:shadow-[0_0_25px_6px_rgba(34,211,238,0.35)]"
            >
                <span
                    className="text-gray-500 group-hover:text-cyan-500 transition duration-300 text-2xl"
                >
                    {experience.icon}
                </span>
            </div>


            {/* Content */}
            <div className="ml-24">
                <h3
                    className="text-lg font-semibold text-gray-800 transition duration-300 ease-in-out
          group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:via-purple-500 group-hover:to-purple-700 bg-clip-text"
                    style={{
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "currentcolor",
                    }}
                >
                    {experience.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{experience.subtitle}</p>
                <span className="text-xs text-gray-400 mt-1">{experience.date}</span>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section
            id="education"
            className="bg-gray-200 py-16 px-6 md:px-24 flex flex-col items-start"
        >
            {/* Title block */}
            <h1 className="w-4/5 md:w-2/3 pt-6 text-xl md:text-3xl text-center font-semibold leading-8 md:leading-12 text-gray-800 mx-auto">
                Discover how my academic background and hands-on experiences have.
            </h1>
            <div className="relative border border-gray-300 w-full my-16" />
            <p className="bg-white px-8 py-2 relative -top-20 text-sm font-semibold -rotate-12 rounded-4xl mx-auto">
                Experience
            </p>

            {/* Cards with vertical line */}
            <div className="relative w-full max-w-3xl flex flex-col space-y-12 ml-56">
                <div className="absolute left-0 top-0 w-1 bg-cyan-400 rounded-full h-full" style={{ zIndex: 0 }} />
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
