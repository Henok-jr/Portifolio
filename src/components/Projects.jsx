import React from "react";

const PROJECTS = [
  {
    name: "YC-Directory",
    description:
      "A directory-style web app for discovering and organizing items, built with a modern frontend stack.",
    github: "https://github.com/Henok-jr/yc-directory",
    tags: ["React", "Next.js"],
    image: null, // add image path later (e.g. '/projects/yc.jpg')
  },
  {
    name: "E-commerce",
    description:
      "An e-commerce experience with product browsing, cart flow, and a clean UI.",
    github: "https://github.com/Henok-jr/e-commerce",
    tags: ["React", "JavaScript"],
    image: null,
  },
  {
    name: "AI Study Assistant",
    description:
      "A study helper app that organizes learning and supports Q&A workflows.",
    github: "https://github.com/Henok-jr/ai-study-assistant",
    tags: ["React", "UI"],
    image: null,
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

        <div className="projectGrid">
          {PROJECTS.map((p) => (
            <article key={p.name} className="projectCard">
              <div className="projectCard__media" aria-label={`${p.name} preview`}>
                {p.image ? (
                  <img className="projectCard__img" src={p.image} alt={`${p.name} screenshot`} />
                ) : (
                  <div className="projectCard__placeholder" aria-hidden="true">
                    <span className="projectCard__placeholderText">Add image</span>
                  </div>
                )}
              </div>

              <div className="projectCard__body">
                <div className="projectCard__top">
                  <h3 className="projectCard__title">{p.name}</h3>
                  <div className="projectCard__tags" aria-label="Tech tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="projectCard__desc">{p.description}</p>

                <div className="projectCard__actions">
                  <a className="btn btn--small" href={p.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
