import React, { useEffect, useMemo, useState } from "react";
import profileImg from "../assets/Profile.jpg";

const cx = (...parts) => parts.filter(Boolean).join(" ");

function Navbar({ theme = "light", onToggleTheme }) {
  const links = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [links]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a
          className="nav__brand"
          href="#home"
          onClick={(e) => onNavClick(e, "#home")}
          aria-label="Go to Home"
        >
          <span className="nav__avatarWrap">
            <img
              className="nav__avatar"
              src={profileImg}
              alt="Henok Befekadu"
              width={38}
              height={38}
              loading="eager"
              decoding="async"
            />
          </span>
          <span className="nav__name">Henok Befekadu</span>
        </a>

        <div className="nav__actions">
          <button
            className="nav__themeBtn"
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            <span className="nav__themeIcon" aria-hidden="true">
              {theme === "dark" ? "☀" : "🌙"}
            </span>
            <span className="nav__themeText">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>

          <button
            className="nav__toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="nav__toggleBar" />
            <span className="nav__toggleBar" />
            <span className="nav__toggleBar" />
          </button>
        </div>

        <nav className={cx("nav__links", menuOpen && "is-open")} aria-label="Primary">
          {links.map((l) => {
            const id = l.href.replace("#", "");
            return (
              <a
                key={l.href}
                className={cx("nav__link", activeId === id && "is-active")}
                href={l.href}
                onClick={(e) => onNavClick(e, l.href)}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
