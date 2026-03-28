import React from "react";

const PROJECTS = [
  {
    name: "YC-Directory",
    description:
      "A directory-style web app for discovering and organizing items, built with a modern frontend stack.",
    github: "https://github.com/Henok-jr/yc-directory",
    tags: ["React", "Next.js"],
  },
  {
    name: "E-commerce",
    description:
      "An e-commerce experience with product browsing, cart flow, and a clean UI.",
    github: "https://github.com/Henok-jr/e-commerce",
    tags: ["React", "JavaScript"],
  },
  {
    name: "AI Study Assistant",
    description:
      "A study helper app that organizes learning and supports Q&A workflows.",
    github: "https://github.com/Henok-jr/ai-study-assistant",
    tags: ["React", "UI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Projects</h2>
          <p className="section__sub">Selected work (GitHub links)</p>
        </div>

        <div className="cards">
          {PROJECTS.map((p) => (
            <article key={p.name} className="card">
              <div className="card__top">
                <h3 className="card__title">{p.name}</h3>
                <div className="card__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="card__desc">{p.description}</p>

              <div className="card__actions">
                <a className="btn btn--small" href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
