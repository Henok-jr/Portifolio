import React, { useEffect, useMemo, useState } from "react";

export default function Hero() {
  const phrases = useMemo(() => ["Fullstack Developer"], []);

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
    <section id="home" className="section hero hero--fullscreen">
      <div className="container hero__grid hero__grid--single hero__grid--center">
        <div className="hero__copy hero__copy--center">
          <p className="eyebrow">
            Hi, I’m <span className="eyebrow__name"> Henok</span>
          </p>

          <h1 className="hero__title hero__title--typing" aria-label={ariaTitle}>
            <span aria-hidden="true">{prefersReducedMotion ? ariaTitle : typed}</span>
            {!prefersReducedMotion && (
              <span className="typingCursor" aria-hidden="true">
                |
              </span>
            )}
          </h1>

          <div className="hero__cta" aria-label="Hero actions">
            <a className="btn" href="/Henok-Befekadu-Resume.pdf" download>
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
