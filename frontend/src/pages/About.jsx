import { useCMS } from "../lib/useCMS.jsx";

export default function About() {
  const pages = useCMS("cms_pages", {});
  const d = pages["about"] || {};
  return (
    <section className="section">
      <h1>{d.title || "About us & History"}</h1>
      {d.hero && <img src={d.hero} alt="" className="img-hero mt-12" />}
      <p className="mt-12">{d.desc || "브랜드 소개와 연혁을 적어주세요."}</p>
    </section>
  );
}
