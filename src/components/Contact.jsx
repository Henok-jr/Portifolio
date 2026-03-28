import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section__title">Contact</h2>
        <p className="section__lead">
          Want to work together? Send a message and I’ll get back to you.
        </p>

        <div className="contact">
          <a className="btn" href="mailto:henok@example.com">
            Email Me
          </a>
          <div className="contact__hint">
            <p className="muted">
              Update the email in <code>src/components/Contact.jsx</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
