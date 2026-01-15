"use client";
import React from "react";

const technologies = [
  { key: "react", name: "React.js", desc: "UI library for building interfaces", initial: "R", color: "#61dafb" },
  { key: "node", name: "Node.js & Express.js", desc: "Server-side JavaScript", initial: "N", color: "#83cd29" },
  { key: "java", name: "Java (Servlets, JSP)", desc: "Backend & web apps", initial: "J", color: "#f89820" },
  { key: "go", name: "Go (Golang)", desc: "Backend & web apps", initial: "G", color: "#00ADD8" },
  { key: "spring", name: "Spring Boot", desc: "Backend framework", initial: "S", color: "#6db33f" },
  { key: "flutter", name: "Flutter", desc: "Cross-platform mobile UI", initial: "F", color: "#02569B" },
  { key: "db", name: "MySQL / PostgreSQL / MongoDB", desc: "Relational & NoSQL databases", initial: "DB", color: "#6b7280" },
  { key: "api", name: "RESTful APIs", desc: "Web services & integrations", initial: "API", color: "#7c3aed" },
  { key: "git", name: "Git & GitHub Workflow", desc: "Source control & CI", initial: "GH", color: "#f34f29" },
  { key: "tailwind", name: "Tailwind CSS", desc: "Utility-first CSS framework", initial: "TW", color: "#38bdf8" },
  { key: "docker", name: "Docker", desc: "Containerization", initial: "D", color: "#2496ED" },
];

function Icon({ name, color }) {
  const common = { width: 36, height: 36, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" };
  switch (name) {
    case "react":
      return (
        <svg {...common} aria-hidden>
          <g stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="12" rx="6.5" ry="2.8" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="6.5" ry="2.8" transform="rotate(-30 12 12)" />
            <ellipse cx="12" cy="12" rx="6.5" ry="2.8" />
            <circle cx="12" cy="12" r="1.2" fill={color} stroke="none" />
          </g>
        </svg>
      );
    case "node":
      return (
        <svg {...common} aria-hidden>
          <path d="M4 7.2v9.6L12 22l8-5.2V7.2L12 2 4 7.2z" fill={color} opacity="0.95" />
        </svg>
      );
    case "java":
      return (
        <svg {...common} aria-hidden>
          <path d="M7 6s3-1 5 0 3 0 3 0-1 1-3 1c-2 0-5-1-5-1z" stroke={color} strokeWidth="1.2" fill="none" />
          <path d="M8.5 9c1.5.9 4 1 6 0" stroke={color} strokeWidth="1.2" fill="none" />
          <path d="M12 16s2-1 2-3c0-1.9-3-2-3-2s-3 .1-3 2c0 2 2 3 4 3z" fill={color} />
        </svg>
      );
    case "go":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="9" fill={color} opacity="0.14" />
          <path d="M9 12c0-1.657 1.343-3 3-3s3 1.343 3 3" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "spring":
      return (
        <svg {...common} aria-hidden>
          <path d="M4 16c4-6 12-6 16 0" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <circle cx="12" cy="9" r="2" fill={color} />
        </svg>
      );
    case "flutter":
      return (
        <svg {...common} aria-hidden>
          <path d="M3 13l7-8 4 4-7 8-4-4z" fill={color} />
        </svg>
      );
    case "db":
      return (
        <svg {...common} aria-hidden>
          <ellipse cx="12" cy="7" rx="8" ry="3" fill={color} opacity="0.16" />
          <rect x="4" y="7" width="16" height="10" rx="2" fill={color} opacity="0.08" />
        </svg>
      );
    case "api":
      return (
        <svg {...common} aria-hidden>
          <rect x="4" y="6" width="16" height="12" rx="2" stroke={color} strokeWidth="1.6" fill="none" />
          <circle cx="8.5" cy="12" r="1.2" fill={color} />
          <circle cx="15.5" cy="12" r="1.2" fill={color} />
        </svg>
      );
    case "git":
      return (
        <svg {...common} aria-hidden>
          <circle cx="6" cy="6" r="1.6" fill={color} />
          <circle cx="18" cy="6" r="1.6" fill={color} />
          <circle cx="12" cy="16" r="1.6" fill={color} />
          <path d="M6 6l6 10 6-10" stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "tailwind":
      return (
        <svg {...common} aria-hidden>
          <path d="M2 12s4-6 10-3 10-4 10-4v8s-4 6-10 3S2 20 2 12z" fill={color} opacity="0.92" />
        </svg>
      );
    case "docker":
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="9" width="18" height="8" rx="1.2" fill={color} />
          <rect x="6" y="6" width="3" height="2" rx="0.6" fill="#fff" opacity="0.25" />
        </svg>
      );
    default:
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="9" fill={color} opacity="0.12" />
        </svg>
      );
  }
}

export default function TechnologiesSection() {
  return (
    <section className="container" aria-labelledby="technologies-heading" style={{ color: "white" }}>
      <h2 id="technologies-heading" className="h2" style={{ marginBottom: "0.75rem" }}>
        Technologies & Tools
      </h2>
      <p className="muted" style={{ marginBottom: "1rem" }}>
        Tools and technologies I use frequently on projects.
      </p>

      <div className="tech-grid">
        {technologies.map((t) => (
          <div className="tech-card card" key={t.key} tabIndex={0} aria-label={t.name}>
            <div
              className="tech-icon"
              aria-hidden
              style={{ background: `linear-gradient(135deg, ${t.color}22, ${t.color}11)` }}
            >
              <Icon name={t.key} color={t.color} />
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