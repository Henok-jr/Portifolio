import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="muted">© {year} Henok Befekadu. All rights reserved.</p>
      </div>
    </footer>
  );
}
