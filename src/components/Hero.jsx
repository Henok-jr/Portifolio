import React, { useEffect, useMemo, useState } from "react";
import profileImg from "../assets/Profile.jpg";

export default function Hero() {
  const phrases = useMemo(
    () => [
      "Frontend Developer",
      "React & Next.js Enthusiast",
      "UI/UX Lover",
      "Web Performance Fanatic",
      "Accessibility Advocate",
    ],
    []
  );

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typed, setTyped] = useState(prefersReducedMotion ? phrases[0] : "");
  const [mode, setMode] = useState("typing"); // 'typing' | 'pausing' | 'deleting'

  useEffect(() => {
    if (prefersReducedMotion) return;

    const typeSpeed = 85;
    const deleteSpeed = 45;
    const pauseAfterTyped = 1300;

    const full = phrases[phraseIndex] ?? "";

    let timeoutId;

    if (mode === "typing") {
      timeoutId = window.setTimeout(() => {
        const next = full.slice(0, typed.length + 1);
        setTyped(next);
        if (next.length >= full.length) setMode("pausing");
      }, typeSpeed);
    } else if (mode === "pausing") {
      timeoutId = window.setTimeout(() => {
        setMode("deleting");
      }, pauseAfterTyped);
    } else if (mode === "deleting") {
      timeoutId = window.setTimeout(() => {
        const next = typed.slice(0, -1);
        setTyped(next);
        if (next.length === 0) {
          setPhraseIndex((i) => (i + 1) % phrases.length);
          setMode("typing");
        }
      }, deleteSpeed);
    }

    return () => window.clearTimeout(timeoutId);
  }, [mode, phraseIndex, phrases, prefersReducedMotion, typed]);

  const ariaTitle = phrases[phraseIndex] ?? "";

  return (
    <section id="home" className="section hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">
            Hi, I’m <span className="eyebrow__name">Henok</span>
            <span className="eyebrow__badge">Frontend</span>
          </p>
          <h1 className="hero__title hero__title--typing" aria-label={ariaTitle}>
            <span aria-hidden="true">{prefersReducedMotion ? ariaTitle : typed}</span>
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
