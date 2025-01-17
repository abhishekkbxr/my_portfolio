"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl  sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <div>
              <TypeAnimation
                sequence={[
                  "Abhishek Kumar",
                  1000,
                  "Web Developer",
                  1000,
                  "Coder",
                  1000,
                  "Programmer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            <span className="text-black mx-1">
            ecommerce website developer in patna. 
            </span>
            <span className="text-black">
            Freelance website developer in patna. <br/>
            </span>
            Passionate full-stack developer,Programmer and quick learner, adept
            at crafting cutting-edge solutions—committed to delivering
            excellence for your projects and eager to contribute my skills to
            your team's success.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1OnZ5AGOAvsmES5WaQudUeNQhJP2IoiX-/view?usp=sharing"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 mr-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Resume / CV
              </span>
            </Link>
            <Link
              href="/#contact"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Let's Build Your Project
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full  bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="abhishekbxr"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 rounded-3xl left-1/2 bg-cover"
              width={350}
              height={350}
            />

            {/* <div className="w-fit absolute md:bottom-5 -bottom-6 md:right-12 right-8 animate-bounce ">
              <Link
                target="_blank"
                className="text-white z-50"
                href="https://linkedin.com/in/abhishek-kumar-4b994922a"
              >
                <Image
                  src="/linkedin-icon.svg"
                  width={40}
                  height={40}
                  alt="Linkedin Icon"
                />
              </Link>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
