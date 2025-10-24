import { useCMS } from "../lib/useCMS.jsx";

export default function SNS() {
  const pages = useCMS("cms_pages", {});
  const d = pages["sns"] || {};
  return (
    <section className="section">
      <h1>{d.title || "SNS"}</h1>
      {d.hero && <img src={d.hero} alt="" className="img-hero mt-12" />}
      <p className="mt-12">
        {d.desc || "Instagram / X / YouTube 등 링크 안내."}
      </p>
    </section>
  );
}
