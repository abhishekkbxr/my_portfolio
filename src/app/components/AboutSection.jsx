"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="divide-y divide-gray-500">
        <div className="py-2 ">
          <p className="text-base font-medium">
            <ArrowRightIcon /> Software Development Engineer Intern
          </p>
          <div className="ml-8 ">
            <span className="text-sm">
              {" "}
              <span className="font-semibold text-primary-400">
                Techax Labs
              </span>{" "}
              | <span className="text-xs">02/2023 - 07/2023</span>
            </span>
            <br />
            <ul className="list-disc divide-y-[0.5px]  divide-gray-500 py-2 space-y-2 text-gray-400">
              <li>
                Developed and maintained backend services for a high-traffic web
                app using Node.js and MySQL.
              </li>
              <li>
                Designed and implemented RESTful APIs, increasing user
                engagement by 10%.
              </li>
              <li>
                Collaborated with the product team for defining requirements and
                ensuring timely deliveries.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-2 ">
          <p className="text-base font-medium">
            <ArrowRightIcon /> Full Stack Developer Intern
          </p>
          <div className="ml-8 ">
            <span className="text-sm">
              {" "}
              <span className="font-semibold text-primary-400">
                AR VILLAGE
              </span>{" "}
              | <span className="text-xs">07/2022 - 11/2022</span>
            </span>
            <br />
            <ul className="list-disc divide-y-[0.5px]  divide-gray-500 py-2 space-y-2 text-gray-400">
              <li>
                Created a web app using MERN Stack and Next.js, integrating
                model-viewer for immersive 3D rendering.
              </li>
              <li>
                Developed a robust 3D-model application with features like
                part-specific search and annotation.
              </li>
              <li>Implemented complete user management and CRUD operations.</li>
            </ul>
          </div>
        </div>
        <div className="py-2 ">
          <p className="text-base font-medium">
            <ArrowRightIcon /> Full Stack Engineer Intern
          </p>
          <div className="ml-8 ">
            <span className="text-sm">
              {" "}
              <span className="font-semibold text-primary-400">
                Settyl
              </span> | <span className="text-xs">11/2022 - 12/2023</span>
            </span>
            <br />
            <ul className="list-disc divide-y-[0.5px]  divide-gray-500 py-2 space-y-2 text-gray-400">
              <li>
                Experienced with Microfrontend architecture, creating dynamic
                routes and a new web page.
              </li>
              <li>
                Utilized React, Node.js, MongoDB, HTML, CSS, and teamwork
                for seamless implementation.
              </li>
              <li>
                Demonstrated expertise in building web solutions within a
                collaborative environment. Remote
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="divide-y divide-gray-500">
        <div className="py-2 ">
          <p className="text-base font-medium">
            <ArrowRightIcon /> Government Engineering College, Buxar
          </p>
          <span className="ml-8 text-sm">B.Tech with ECE Stream</span>
          <br />
          <span className="ml-8 text-sm">2020 - 2024 | CGPA : 7.06/10</span>
        </div>
        <div className="py-2 ">
          <p className="text-base font-medium">
            <ArrowRightIcon /> D.K. College, Dumraon - Senior Secondary
          </p>
          <span className="ml-8 text-sm">Bihar School Examination Board</span>
          <br />
          <span className="ml-8 text-sm">2017-2019 | Percentage: 74.8</span>
        </div>
        <div className="py-2 ">
          <p className="text-base font-medium">
            <ArrowRightIcon /> DAV public school, ratwar, kaimur
          </p>
          <span className="ml-8 text-sm">2016 - 2017 | CGPA : 8.4/10</span>
        </div>
      </div>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-gray-300 " id="about">
      <div className="md:grid   md:grid-cols-2 gap-3 items-center py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="">
          <Image src="/images/about-image.png" width={500} height={500} />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-screen ">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React,Next, Redux, Node.js, Express, mySql,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificate{" "}
            </TabButton> */}
          </div>
          <div className="mt-8 overflow-y-scroll">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
