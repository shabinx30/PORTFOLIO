"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Hero = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: "-20% 0px" });

    return (
        <section ref={sectionRef} className="relative h-[100dvh] w-[100vw] bg-black">
            <div className="absolute flex justify-center pt-[14%] bg-[black]/30 z-40 backdrop-blur-[50px] h-[114dvh] w-[100vw]">
                <div className="text-center pt-[30%] md:p-0 w-[90%] lg:w-[47%]">
                    <h1 className="text-2xl lg:text-4xl text-[#C2FF78] mb-2">HELLO,</h1>
                    <h1 className="text-3xl lg:text-5xl">I&apos;M SHABEEN SHARIH</h1>
                    <p className="text-[#AEAEAE] text-[0.65em] font-mono lg:text-[0.825em] mt-8">
                        I&apos;m a highly passionate <span className="text-[#C2FF78]">web developer</span>, constantly
                        challenging my problem-solving skills and striving for
                        consistency. Every day, I work diligently to enhance my
                        abilities and grow in my craft.
                    </p>
                </div>
            </div>
            <div className="absolute bottom-[-3em] z-50 flex justify-center items-center w-full">
                <h1 className="text-white text-2xl lg:text-3xl">PROJECTS</h1>
            </div>
            <motion.div
                className="absolute bottom-[22%] right-[10%] lg:right-[0%] rotate-[20deg] bg-[#8CFF00] w-[10%] h-[25%] lg:h-[50%] rounded-full"
                animate={isInView ? { y: ["10%", "-10%", "10%"] } : { y: 0 }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeIn",
                }}
            />
            <div className="absolute bottom-[-2%] right-[3em] rotate-[75deg] bg-[#8CFF00] w-[20%] lg:w-[14em] h-[22%] lg:h-[50%] rounded-full" />
            <motion.div
                className="absolute bottom-0 right-[26%] rotate-[-25deg] bg-[#8CFF00] w-[18%] h-[40%] rounded-full"
                animate={isInView ? { x: ["5%", "-5%", "5%"] } : { x: 0 }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeIn",
                    delay: 0.2,
                }}
            />
            <div className="absolute bottom-0 right-[20%] bg-[#8CFF00] w-[8em] h-[30%] rounded-full" />
            <motion.div
                className="absolute bottom-8 left-0 rotate-[65deg] bg-[#8CFF00] w-[20%] h-[30%] rounded-full"
                animate={isInView ? { x: ["10%", "-10%", "10%"] } : { x: 0 }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeIn",
                    delay: 0.6,
                }}
            />
            <div className="absolute bottom-8 left-0 rotate-[-30deg] bg-[#8CFF00] w-[20%] h-[20%] rounded-full" />
            <div className="absolute bottom-4 left-[16%] rotate-[10deg] bg-[#8CFF00] w-[20%] h-[10%] rounded-full" />
            <motion.div
                className="absolute bottom-2 left-[40%]  bg-[#8CFF00] w-[20%] h-[15%] rounded-full"
                animate={isInView ? { x: ["10%", "-10%", "10%"] } : { x: 0 }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeIn",
                    delay: 0.4,
                }}
            />
        </section>
    );
};

export default Hero;
