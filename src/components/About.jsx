import React from "react";
import profileImg from "../assets/Profile.jpg";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about__grid">
          <div className="about__copy">
            <h2 className="section__title">About</h2>

            <p className="section__lead">
              Hi, I’m Henok, a fullstack developer focused on building fast, responsive, and
              intuitive web experiences. I specialize in React and Next.js, while also working
              on the backend to create seamless, end-to-end digital products.
            </p>
            <p className="section__lead">
              My approach combines performance, usability, and clean architecture, ensuring
              every interaction feels smooth and every system works reliably behind the scenes.
              I enjoy turning complex ideas into simple, elegant solutions, bridging the gap
              between design and functionality.
            </p>
            <p className="section__lead">
              I’m constantly exploring new technologies, experimenting with design, and
              improving my skills in both frontend and backend development, along with AI
              integration. Outside of coding, I enjoy pushing myself to grow, whether it’s
              learning something new or staying consistent at the gym.
            </p>
          </div>

          <div className="about__media" aria-label="About photo">
            <div className="about__photoInner">
              <div className="about__photoCircle" aria-hidden="true" />
              <img
                className="about__photoImg"
                src={profileImg}
                alt="Henok Befekadu"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
