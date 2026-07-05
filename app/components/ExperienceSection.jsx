"use client";
import React from "react";

const experienceItems = [
  {
    title: "Software Engineer Intern",
    company: "CodeAisys (4A Technology Pvt Ltd)",
    project: "Restaurant Management System (RMS)",
    period: "Dec 2025 – Jun 2026",
    bullets: [
      "Migrated a legacy PHP/Laravel app to a Go and PostgreSQL backend.",
      "Applied Hexagonal Architecture to separate business logic from external services.",
      "Built RBAC, ERDs, and API tests for secure and stable order handling.",
    ],
    technologies: ["Go", "GORM", "PostgreSQL", "React", "Bruno", "GitHub", "Agile"],
  },
  {
    title: "Stock Management System",
    company: "Desktop ERP Application",
    project: "Inventory, finance, and reporting workflow",
    bullets: [
      "Built a VB.NET and MySQL ERP system for inventory tracking.",
      "Implemented CRUD modules for customer and supplier management.",
      "Added credit, cheque, and ledger tracking with Crystal Reports output.",
    ],
    technologies: ["VB.NET", ".NET Framework", "MySQL", "Crystal Reports", "ODBC", "SQL"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="h2">Work Experience</h2>
        <p className="experience-intro">
          Backend, database, and ERP work at a glance.
        </p>

        <div className="experience-list">
          {experienceItems.map((item) => (
            <article key={item.title} className="experience-card">
              <div className="experience-header">
                <div>
                  <p className="experience-role">{item.title}</p>
                  <p className="experience-company">{item.company}</p>
                </div>
                <span className="experience-period">{item.period ?? "Selected Work"}</span>
              </div>

              <p className="experience-project">{item.project}</p>

              <ul className="experience-bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="experience-tags">
                {item.technologies.map((technology) => (
                  <span key={technology} className="experience-tag">
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;