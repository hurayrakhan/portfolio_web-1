import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaGoogle,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";

const socialLinks = [
    {
        icon: <FaLinkedinIn />,
        color: "text-[#0077B5]",
        href: "https://www.linkedin.com/in/hurayrakhan/",
        title: "LinkedIn",
    },
    {
        icon: <FaGithub />,
        color: "text-gray-800",
        href: "https://github.com/hurayrakhan",
        title: "GitHub",
    },
    {
        icon: <FaTwitter />,
        color: "text-[#1DA1F2]",
        href: "https://x.com/imhurayrakhan",
        title: "Twitter",
    },
    {
        icon: <FaGoogle />,
        color: "text-[#DB4437]",
        href: "mailto:imhurayrakhan@gmail.com",
        title: "Gmail",
    },
    {
        icon: <FaFacebookF />,
        color: "text-[#3b5998]",
        href: "https://www.facebook.com/hurayra.khan.965/",
        title: "Facebook",
    },
];

const SocialBar = () => {
    return (
        <div className="fixed left-6 bottom-16 z-50 hidden sm:flex flex-col items-center space-y-4">
            {/* Social Icons */}
            {socialLinks.map((item, idx) => (
                <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                    className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-white grayscale hover:grayscale-0 shadow hover:shadow-[0_0_15px_3px_rgba(34,211,238,0.5)] hover:scale-110 transition-all duration-300"
                >
                    <span className={`text-xl ${item.color}`}>{item.icon}</span>

                    {/* Tooltip */}
                    <span className="absolute left-12 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.title}
                    </span>
                </a>
            ))}

            {/* Vertical Animated Line */}
            <div className="w-[2px] h-24 bg-cyan-500 relative mt-4 overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 w-full h-full animate-slide-down bg-gradient-to-b from-cyan-300 to-cyan-600" />
            </div>
        </div>
    );
};

export default SocialBar;
