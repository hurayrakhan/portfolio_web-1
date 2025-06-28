import React from "react";

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
        tech: ["Next.js", "MongoDB", "Node.js"],
        image: "https://i.ibb.co/5hrJfpG6/Screenshot-2025-06-25-093731.png",
        github: "https://github.com/hurayrakhan/buy-bulk-client",
        demo: "https://buynbulk-11.web.app/",
    },
    {
        id: 2,
        title: "Buy&Bulk",
        description: "B2B wholesale platform connecting suppliers and retailers with bulk orders.",
        tech: ["Next.js", "MongoDB", "Node.js"],
        image: "https://i.ibb.co/5hrJfpG6/Screenshot-2025-06-25-093731.png",
        github: "https://github.com/hurayrakhan/buy-bulk-client",
        demo: "https://buynbulk-11.web.app/",
    },
    {
        id: 2,
        title: "Buy&Bulk",
        description: "B2B wholesale platform connecting suppliers and retailers with bulk orders.",
        tech: ["Next.js", "MongoDB", "Node.js"],
        image: "https://i.ibb.co/5hrJfpG6/Screenshot-2025-06-25-093731.png",
        github: "https://github.com/hurayrakhan/buy-bulk-client",
        demo: "https://buynbulk-11.web.app/",
    },
    {
        id: 2,
        title: "Buy&Bulk",
        description: "B2B wholesale platform connecting suppliers and retailers with bulk orders.",
        tech: ["Next.js", "MongoDB", "Node.js"],
        image: "https://i.ibb.co/5hrJfpG6/Screenshot-2025-06-25-093731.png",
        github: "https://github.com/hurayrakhan/buy-bulk-client",
        demo: "https://buynbulk-11.web.app/",
    },
    {
        id: 2,
        title: "Buy&Bulk",
        description: "B2B wholesale platform connecting suppliers and retailers with bulk orders.",
        tech: ["Next.js", "MongoDB", "Node.js"],
        image: "https://i.ibb.co/5hrJfpG6/Screenshot-2025-06-25-093731.png",
        github: "https://github.com/hurayrakhan/buy-bulk-client",
        demo: "https://buynbulk-11.web.app/",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-cyan-50 -mt-6 py-16 px-6 md:px-12 lg:px-24 rounded-b-4xl"
        >
            <h1 className="w-4/5 md:w-2/3 pt-6 text-xl md:text-3xl text-center font-semibold leading-8 md:leading-12 text-gray-800 mx-auto">
                Explore the projects I've built using modern technologies and clean design.
            </h1>

            <div className="relative border border-gray-300 w-full my-16"></div>
            <p className="bg-white px-8 py-2 relative -top-20 text-sm font-semibold -rotate-12 rounded-4xl w-max mx-auto">
                Projects
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                {projects.map(({ id, title, description, tech, image, github, demo }) => (
                    <div
                        key={id}
                        className="group relative bg-white rounded-3xl overflow-hidden shadow-md 
             border-2 border-transparent hover:border-cyan-400 
             grayscale hover:grayscale-0 hover:brightness-110 
             hover:shadow-[0_0_25px_5px_rgba(34,211,238,0.4)] 
             transition-all duration-500 cursor-pointer"
                    >
                        {/* Image with zoom on hover */}
                        <div className="w-full h-48 overflow-hidden">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 pt-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center border-b-2 border-gray-300 pb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-700 transition-all duration-300">{title}</h3>
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
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-600 hover:text-cyan-800 transition"
                                >
                                    {/* GitHub Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0C5.37 0 0 5.372 0 12a12 12 0 008.207 11.42c.6.112.82-.26.82-.58v-2.2c-3.338.73-4.04-1.61-4.04-1.61-.546-1.39-1.334-1.758-1.334-1.758-1.09-.746.08-.73.08-.73 1.204.084 1.838 1.238 1.838 1.238 1.07 1.834 2.806 1.304 3.492.996.107-.774.42-1.304.763-1.604-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.3-.536-1.52.117-3.17 0 0 1.008-.32 3.3 1.23a11.4 11.4 0 016 0c2.292-1.55 3.298-1.23 3.298-1.23.656 1.65.243 2.87.12 3.17.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.63-5.475 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.216.7.824.58A12 12 0 0024 12c0-6.628-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href={demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-600 hover:text-cyan-800 transition"
                                >
                                    {/* External Link Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
