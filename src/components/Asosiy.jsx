import React from "react";

function Asosiy() {
  return (
    <div className="page">
      <h1>Bu mening shaxsiy sahifam</h1>
      <img src="/my.jpg" alt="" />
      <p>Frontend dasturchi sifatida o'zimni rivojlantiryapman.</p>
      <p>
        Ushbu surat mening maktab yillarimdan. O‘sha paytlarda texnologiyaga
        bo‘lgan qiziqishim endi boshlanayotgan edi. Bugun esa bu qiziqish meni
        web-dasturlash olamiga olib keldi.
      </p>
      <button className="back-button" onClick={() => window.history.back()}>
        Orqaga
      </button>
    </div>
  );
}

export default Asosiy;
