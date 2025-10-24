import { useCMS } from "../lib/useCMS.jsx";

export default function Brand() {
  const pages = useCMS("cms_pages", {});
  const d = pages["brand"] || {};
  return (
    <section className="section">
      <h1>{d.title || "Brand"}</h1>
      {d.hero && <img src={d.hero} alt="" className="img-hero mt-12" />}
      <p className="mt-12">{d.desc || "브랜드 철학/톤앤매너/키비주얼 설명."}</p>
    </section>
  );
}
