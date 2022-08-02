import React from 'react'

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import "./Particles.css";

function Particle() {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    
    const particlesLoaded = (container) => {
    console.log(container);
    };

    return (
        <Particles
            canvasClassName='canvas-bggg'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                backgroundMode: {
                enable: true
                },
                background: {
                color: "#000"
                },
                particles: {
                // canvas borders bounce factors
                bounce: {
                    horizontal: {
                    value: 1.01
                    },
                    vertical: {
                    value: 1.01
                    }
                },
                color: {
                    value: "#ffffff"
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                collisions: {
                    enable: true,
                    // collisions bounce factors
                    bounce: {
                    horizontal: {
                        value: 1.5
                    },
                    vertical: {
                        value: 1.5
                    }
                    }
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 2,       // Скорость вращения хуйни
                    straight: false
                },
                number: {
                    density: {
                    enable: true,
                    area: 800
                    },
                    value: 40   // Количество хуйни
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: "circle"
                },
                size: {
                    random: true,
                    value: 2    // Размер точек
                }
                },
                detectRetina: true
            }}
        />
    )
}

export default Particle