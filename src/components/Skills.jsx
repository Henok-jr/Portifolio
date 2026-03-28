import React from "react";

const SKILLS = ["HTML", "CSS", "JavaScript", "React", "Next.js"];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <div className="chips" role="list">
          {SKILLS.map((skill) => (
            <span key={skill} className="chip" role="listitem">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
