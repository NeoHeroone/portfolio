import React from "react";

function Contact() {
  return (
    <div className="page">
      <h1>Aloqa</h1>
      <p>
        <strong>Telegram:</strong>{" "}
        <a
          href="https://t.me/AbdullohAnvarovFront"
          target="_blank"
          rel="noopener noreferrer"
        >
          @AbdullohAnvarovFront
        </a>
      </p>
      <p>
        <strong>Telefon:</strong> +998 90 999 28 00
      </p>
      <button className="back-button" onClick={() => window.history.back()}>
        Orqaga
      </button>
    </div>
  );
}

export default Contact;
