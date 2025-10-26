"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js</li>
        <li>Node.js & Express.js</li>
        <li>Java (Servlets, JSP)</li>
        <li>Flutter</li>
        <li>MySQL / PostgreSQL / MongoDB</li>
        <li>RESTful APIs</li>
        <li>Git & GitHub Workflow</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>University of Colombo School of Computing</strong><br />
          B.Sc. in Computer Science (2023 – Present) <br />
          Current GPA: 3.109
        </li>
        <li>
          <strong>St. Mary’s Convent, Matara</strong><br />
          G.C.E A/L (2021): <br />
          Physics - B, Chemistry - A, Combined Mathematics - A
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Programming Foundations: Object-Oriented Design</li>
        <li>AWS Educate: Introduction to Cloud 101</li>
        <li>React Essential Training</li>
        <li>Python Quick Start</li>
        <li>Git Essential Training (2023)</li>
      </ul>
    ),
  },
];


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
       <Image 
  src="/images/about-image.png" 
  width={500} 
  height={500} 
  alt="Profile illustration" 
  className="rounded-lg shadow-lg"
/>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am dedicated to advancing as a software engineer and am a third-year Computer Science undergraduate at the
 University of Colombo School of Computing with hands-on experience in full-stack development. I have worked
 extensively with Java, React, Node.js, Flutter, and databases including MySQL, PostgreSQL, and MongoDB. I
 am passionate about building complete, user-centric software applications that solve real-world problems. I am a
 proactive and fast learner who enjoys experimenting with new technologies and working both independently and
 collaboratively. I aim to contribute to multi faceted projects while gaining exposure to industry best practices
 and learning from experienced professionals.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;