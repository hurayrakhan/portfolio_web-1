import React, { useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView, useAnimation } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "DishDive",
        description: "A recipe-sharing platform with trending dishes, user profiles, and ratings.",
        tech: ["React", "Tailwind CSS", "Firebase"],
        image: "https://i.ibb.co/s9wjm1mz/Screenshot-2025-06-27-061057.png",
        github: "https://github.com/hurayrakhan/dishdive",
        demo: "https://dishdive-a10.web.app/",
    },
    {
        id: 2,
        title: "Buy&Bulk",
        description: "B2B wholesale platform connecting suppliers and retailers with bulk orders.",
        tech: ["react", "MongoDB", "Node.js"],
        image: "https://i.ibb.co/5hrJfpG6/Screenshot-2025-06-25-093731.png",
        github: "https://github.com/hurayrakhan/buy-bulk-client",
        demo: "https://buynbulk-11.web.app/",
    },
    {
        id: 3,
        title: "QuickBillz",
        description: "QuickBillz is a mobile banking website that offers all banking opportunities.",
        tech: ["react", "firebase", "Node.js"],
        image: "https://i.ibb.co/KxvQfR1P/Screenshot-2025-05-07-090301.png",
        github: "https://github.com/hurayrakhan/quickbillz",
        demo: "https://assignment-9-41e60.web.app/",
    },
];

export default function Projects() {
    return (
        <div className="bg-gray-200">
            <section
                id="projects"
                className="bg-cyan-50 -mt-6  py-16 px-6 md:px-12 lg:px-24 rounded-b-4xl"
            >
                <h1 className="w-4/5 md:w-2/3 pt-6 text-xl md:text-3xl text-center font-semibold leading-8 md:leading-12 text-gray-800 mx-auto">
                    Explore the projects I've built using modern technologies and clean design.
                </h1>

                <div className="relative border border-gray-300 w-full my-16"></div>
                <p className="bg-white px-8 py-2 relative -top-20 text-sm font-semibold -rotate-12 rounded-4xl w-max mx-auto">
                    Projects
                </p>

                {/* Grid container with motion stagger */}
                <motion.div
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    {projects.map(({ id, title, description, tech, image, github, demo }) => {
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const ref = useRef(null);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const inView = useInView(ref, { amount: 0.2 });
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const controls = useAnimation();

                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        useEffect(() => {
                            if (inView) {
                                controls.start({ opacity: 1, y: 0 });
                            } else {
                                controls.start({ opacity: 0, y: 40 });
                            }
                        }, [inView, controls]);

                        return (
                            <motion.div
                                key={id}
                                ref={ref}
                                animate={controls}
                                initial={{ opacity: 0, y: 40 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                whileHover={{ scale: 1.02 }}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-md 
                 border-2 border-transparent hover:border-cyan-400 
                 grayscale hover:grayscale-0 hover:brightness-110 
                 hover:shadow-[0_0_25px_5px_rgba(34,211,238,0.4)] 
                 transition-all duration-500 cursor-pointer"
                            >
                                <div className="w-full h-48 overflow-hidden">
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-4 pt-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center border-b-2 border-gray-300 pb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-700 transition-all duration-300">
                                        {title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4 pt-4">
                                        {/* GitHub */}
                                        <a
                                            href={github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-cyan-600 hover:text-cyan-800 transition"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.11-.775.418-1.304.762-1.603-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 3-.404c1.02.004 2.045.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.804 5.628-5.475 5.922.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                        </a>

                                        {/* External Link */}
                                        <a
                                            href={demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-cyan-600 hover:text-cyan-800 transition"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        </a>
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}

                </motion.div>
            </section>
        </div>
    );
}
