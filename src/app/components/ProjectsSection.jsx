"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nextjs Portfolio Website",
    description:
      "Crafting a dynamic and interactive portfolio website using Next.js to showcase my skills, projects, and expertise in a seamless and engaging manner.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Lanita Construction pvt. Ltd.",
    description:
      "Proudly collaborated with Lanita Construction Pvt. Ltd., showcasing our commitment to excellence through successful project.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://lanitaconstruction.com/",
    previewUrl: "https://lanitaconstruction.com/",
  },
  {
    id: 4,
    title: "Hotel Bookin App",
    description:
      "Experience seamless travel planning with our hotel booking app, meticulously crafted using React.js for a dynamic frontend, Node.js for robust backend functionalities, and MongoDB for efficient data management. Elevate your journey with user-friendly design and real-time booking capabilities",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhishekkbxr/booking-app.git",
    previewUrl: "https://booking-mu-two.vercel.app",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description:
      "Developed a cutting-edge E-commerce App, Used Technologies are Next.js and Tailwind CSS, our app offers a visually stunning and user-friendly interface. Seamless transactions are ensured through the integration of the Razorpay payment gateway",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhishekkbxr/ecommerce.git",
    previewUrl: "https://github.com/abhishekkbxr/ecommerce.git",
  },

  {
    id: 5,
    title: "Dharti Automation Pvt. Ltd.",
    description: "Explore the future of automation with Dharti Automation's portfolio website. As a leading automation company, we showcase our expertise in innovative solutions, cutting-edge technologies, and a commitment to transforming industries. Discover how we bring efficiency, precision, and advancement to the forefront of automation",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://dhartiautomation.com/",
    previewUrl: "https://dhartiautomation.com/",
  },
  {
    id: 6,
    title: "Github Account",
    description: "Please Vist My Github for more Projects",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhishekkbxr",
    previewUrl: "https://github.com/abhishekkbxr",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl  font-bold text-white mt-4 mb-16 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <div className=" py-10">
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
