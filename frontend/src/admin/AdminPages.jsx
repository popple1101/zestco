import React, { useMemo, useState } from "react";
import useLocalState from "./hooks/useLocalState.jsx";

const PAGES = [
  { id: "about", name: "About us & History" },
  { id: "brand", name: "Brand" },
  { id: "products", name: "Products" },
  { id: "where-to-buy", name: "Where to Buy" },
  { id: "sns", name: "SNS" },
  { id: "contact", name: "Contact" },
  { id: "notice", name: "Notice" },
];

export default function AdminPages() {
  const [pages, setPages] = useLocalState("cms_pages", {});
  const [sel, setSel] = useState("about");
  const model = useMemo(
    () => pages[sel] || { title: "", desc: "", hero: "" },
    [pages, sel]
  );

  function onFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () =>
      setPages((prev) => ({
        ...prev,
        [sel]: { ...(prev[sel] || {}), hero: fr.result },
      }));
    fr.readAsDataURL(file);
  }

  function save(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const title = fd.get("title");
    const desc = fd.get("desc");
    setPages((prev) => ({
      ...prev,
      [sel]: { ...(prev[sel] || {}), title, desc },
    }));
  }

  return (
    <section className="section">
      <h1>Pages</h1>
      <div className="admin-grid-241fr">
        <div className="card">
          <b>페이지 목록</b>
          <ul className="mt-8" style={{ paddingLeft: 16 }}>
            {PAGES.map((p) => (
              <li key={p.id}>
                <button className="linklike" onClick={() => setSel(p.id)}>
                  {p.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <b>편집: {PAGES.find((p) => p.id === sel)?.name}</b>
          <form onSubmit={save} className="form-grid mt-12">
            <input name="title" placeholder="제목" defaultValue={model.title} />
            <textarea name="desc" rows={6} placeholder="설명">
              {model.desc}
            </textarea>
            <div>
              <label>
                <b>대표 이미지</b>
              </label>
              <br />
              <input type="file" accept="image/*" onChange={onFile} />
              {model.hero && (
                <img src={model.hero} alt="" className="img-hero mt-8" />
              )}
            </div>
            <div>
              <button type="submit">저장</button>
            </div>
          </form>
          <div className="muted mt-8">
            * 로컬 저장소에 저장됩니다. 공개 페이지는 자동 반영.
          </div>
        </div>
      </div>
    </section>
  );
}
