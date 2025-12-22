"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: " Agrovia– Digital Agriculture Platform ",
    description: "Agrovia is a digital agriculture platform designed to support Sri Lankan farmers by promoting sustainable farming and providing direct market access. It enables bulk purchasing, transport coordination, and knowledge sharing while integrating smart tools such as real-time price forecasting, pest alerts, and pre-harvest contract management to improve income stability and decision-making. The project was developed using Agile practices with Jira, and built with React.js, Node.js, Express.js, and MySQL.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: [
        "https://github.com/HimashaChinthani/Agrovia.git",
        "https://github.com/HimashaChinthani/Agrovia-Backend.git"
    ],
    previewUrl: "/",
  },
  {
    id: 2,
    title: " Parlimate– Political Engagement Platform",
    description: "Parlimate is a web platform designed to improve political transparency and encourage meaningful engagement between politicians and citizens. It features role-based access control for Citizens, Politicians, and Admins, enabling secure interaction through public surveys, discussion rooms, fundraising tools, announcements, politician comparison, meeting scheduling, and payment verification. The system was developed using the MVC architecture with strong OOP and design pattern practices, built using JSP, Java Servlets, CSS, JavaScript, and PostgreSQL.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HimashaChinthani/Parlimate-Project.git",
    previewUrl: "/",
  },
  
  {
    id: 3,
    title: " StayEase– Hotel Booking Platform",
    description: "StayEase is a full-featured hotel booking platform that allows users to search, book, and manage hotel room reservations easily. It includes secure user authentication and automated booking confirmation emails, ensuring a smooth and reliable booking experience. The platform is developed using the MERN stack — React, Node.js, Express.js, and MongoDB.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HimashaChinthani/Hotel_booking.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: " Instant Messaging App– QR-Based Chat",
    description: "This Android messaging app allows two users to initiate temporary chats by scanning and pairing through a QR code. It supports real-time messaging using Firebase, while maintaining a local chat history with SQLite for offline access. The app’s connection logic is powered by QR-based user pairing, providing a seamless and secure way to start conversations. The project is built using Flutter, Firebase, and SQLite, combining a modern cross-platform UI with reliable backend functionality.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/HimashaChinthani/Flutter_chat_app.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: " Portfolio Web – Personal Showcase Site",
    description:
      "A responsive personal portfolio website highlighting projects, skills, and experience with smooth animations and a dark, modern UI. Built using Next.js, React, Tailwind CSS, and Framer Motion to ensure fast performance and a polished user experience.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HimashaChinthani/Portfolio-Website-Sample",
    previewUrl: "/",
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      </div>
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
    </section>
  );
};

export default ProjectsSection;