import { useCMS } from "../lib/useCMS.jsx";

export default function Contact() {
  const pages = useCMS("cms_pages", {});
  const d = pages["contact"] || {};
  return (
    <section className="section">
      <h1>{d.title || "Contact"}</h1>
      {d.hero && <img src={d.hero} alt="" className="img-hero mt-12" />}
      <p className="mt-12">{d.desc || "문의처/이메일/주소 등을 적어주세요."}</p>

      <div className="card mt-16">
        <form onSubmit={(e) => e.preventDefault()} className="form-grid">
          <input placeholder="이름" />
          <input placeholder="이메일" type="email" />
          <textarea placeholder="문의 내용" rows={6} />
          <button type="submit">보내기</button>
        </form>
      </div>
    </section>
  );
}
