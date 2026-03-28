import React, { useEffect, useMemo, useState } from "react";
import profileImg from "../assets/Profile.jpg";

export default function Hero() {
  const fullTitle = useMemo(() => "Frontend Developer", []);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [typed, setTyped] = useState(prefersReducedMotion ? fullTitle : "");

  useEffect(() => {
    if (prefersReducedMotion) return;

    let i = 0;
    const tick = () => {
      i += 1;
      setTyped(fullTitle.slice(0, i));
      if (i >= fullTitle.length) window.clearInterval(id);
    };

    const id = window.setInterval(tick, 60);
    return () => window.clearInterval(id);
  }, [fullTitle, prefersReducedMotion]);

  return (
    <section id="home" className="section hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Hi, I’m Henok</p>
          <h1 className="hero__title hero__title--typing" aria-label={fullTitle}>
            <span aria-hidden="true">{typed}</span>
            {!prefersReducedMotion && (
              <span className="typingCursor" aria-hidden="true">
                |
              </span>
            )}
          </h1>
          <p className="hero__subtitle">
            I design and build web experiences that blend performance with creativity. My goal is simple — to create digital products that feel smooth, look sharp, and truly stand out. As a frontend developer, I craft immersive, responsive interfaces that draw users in and keep them engaged. With a strong focus on detail, performance, and usability, I transform concepts into polished digital experiences that leave a lasting impression.
          </p>

          <div className="hero__cta">
            <a className="btn" href="#projects">
              View Projects
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <div className="hero__photo" aria-label="Profile photo">
          <div className="hero__photoInner">
            <div className="hero__photoCircle" aria-hidden="true" />
            <img className="hero__photoImg" src={profileImg} alt="Henok Befekadu" />
          </div>
        </div>
      </div>
    </section>
  );
}
