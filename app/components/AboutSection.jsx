"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="about" className="py-12">
      <div className="container">
        <div className="about-card">
          <div className="about-image">
            <Image
              src="/images/about-image.png"
              alt="Profile"
              width={700}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="about-intro">
            <h2 className="h2">About Me</h2>
            <p>
              I am a software engineer and a Computer Science undergraduate at the University of Colombo
              School of Computing. I build full‑stack applications using Java, React, Node.js, and modern tooling.
              I enjoy designing thoughtful user interfaces, building reliable backends, and learning new technologies
              to solve real problems.
            </p>

            <div className="about-badges">
              <span className="about-badge">Full‑Stack Developer</span>
              <span className="about-badge">Open to Collaboration</span>
              <span className="about-badge">Remote / Hybrid</span>
            </div>

            <div className="about-cta">
              <button onClick={scrollToProjects} className="btn">See Projects</button>
            </div>

            <div className="education-list">
              <div className="education-item">
                <div className="education-year">2023 — Present</div>
                <div className="education-body">
                  <strong>University of Colombo School of Computing</strong>
                  <div>B.Sc. in Computer Science</div>
                  <div>Current GPA: 3.26</div>
                </div>
              </div>

              <div className="education-item">
                <div className="education-year">2021</div>
                <div className="education-body">
                  <strong>St. Mary’s Convent, Matara</strong>
                  <div>G.C.E A/L — Physics: B, Chemistry: A, Combined Mathematics: A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;