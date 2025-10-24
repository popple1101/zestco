import { useCMS } from "../lib/useCMS.jsx";

export default function WhereToBuy() {
  const pages = useCMS("cms_pages", {});
  const d = pages["where-to-buy"] || {};
  return (
    <section className="section">
      <h1>{d.title || "Where to Buy"}</h1>
      {d.hero && <img src={d.hero} alt="" className="img-hero mt-12" />}
      <p className="mt-12">
        {d.desc || "온라인/오프라인 구매처 정보를 넣어주세요."}
      </p>
    </section>
  );
}
