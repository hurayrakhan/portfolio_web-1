// src/components/Hero/BackgroundParticles.jsx
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";


const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute top-0 left-0 w-full h-full z-0"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 14,
            density: { enable: true, area: 800 },
          },
          shape: {
            type: "image",
            image: [
              { src: "./html.png", width: 30, height: 30 },
              { src: "./css.png", width: 30, height: 30 },
              { src: "./js.png", width: 30, height: 30 },
              { src: "./mongodb.png", width: 30, height: 30 },
              { src: "./react.png", width: 30, height: 30 },
              { src: "./node.png", width: 30, height: 30 },
              { src: "./tailwind.png", width: 30, height: 30 },
            ],
          },
          size: { value: 30, random: true },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },
          },
          opacity: { value: 0.8 },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundParticles;
