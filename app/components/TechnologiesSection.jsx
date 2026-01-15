"use client";
import React from "react";

const technologies = [
  { key: "react", name: "React.js", desc: "UI library for building interfaces", initial: "R" },
  { key: "node", name: "Node.js & Express.js", desc: "Server-side JavaScript", initial: "N" },
  { key: "java", name: "Java (Servlets, JSP)", desc: "Backend & web apps", initial: "J" },
  { key: "flutter", name: "Flutter", desc: "Cross-platform mobile UI", initial: "F" },
  { key: "db", name: "MySQL / PostgreSQL / MongoDB", desc: "Relational & NoSQL databases", initial: "DB" },
  { key: "api", name: "RESTful APIs", desc: "Web services & integrations", initial: "API" },
  { key: "git", name: "Git & GitHub Workflow", desc: "Source control & CI", initial: "GH" },
  { key: "tailwind", name: "Tailwind CSS", desc: "Utility-first CSS framework", initial: "TW" },
];

export default function TechnologiesSection() {
  return (
    <section className="container" aria-labelledby="technologies-heading">
      <h2 id="technologies-heading" className="h2" style={{ marginBottom: "0.75rem" }}>
        Technologies & Tools
      </h2>
      <p className="muted" style={{ marginBottom: "1rem" }}>
        Tools and technologies I use frequently on projects.
      </p>

      <div className="tech-grid">
        {technologies.map((t) => (
          <div className="tech-card card" key={t.key}>
            <div className="tech-icon" aria-hidden>
              <span className="tech-initial">{t.initial}</span>
            </div>
            <div className="tech-body">
              <div className="tech-name">{t.name}</div>
              <div className="tech-desc muted">{t.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
