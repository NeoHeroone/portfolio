import React from "react";

function AboutMe() {
  return (
    <div className="page">
      <h1>Men haqimda</h1>
      <p>
        <strong>Ism:</strong> Abdulloh
      </p>
      <p>
        <strong>Familiya:</strong> Anvarov
      </p>
      <p>
        <strong>Yosh:</strong> 18
      </p>
      <p>
        Najot Ta'lim o'quv markazida frontend dasturchi bo‘lib tahsil olyapman.
      </p>
      <p>
        Hozirda o'zimning shaxsiy "Mafid Frontend" nomli telegram kanalim ham
        bor
      </p>
      <button className="back-button" onClick={() => window.history.back()}>
        Orqaga
      </button>
    </div>
  );
}

export default AboutMe;
