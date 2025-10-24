import React from "react";
import useLocalState from "./hooks/useLocalState.jsx";

export default function AdminSettings() {
  const [cfg, setCfg] = useLocalState("cms_settings", {
    brand: "YOUR BRAND",
    theme: "light",
  });

  function save(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setCfg({ brand: fd.get("brand"), theme: fd.get("theme") });
  }

  return (
    <section className="section">
      <h1>Settings</h1>
      <div className="card">
        <form onSubmit={save} className="form-grid">
          <label>
            브랜드명 <input name="brand" defaultValue={cfg.brand} />
          </label>
          <button type="submit">저장</button>
        </form>
      </div>
    </section>
  );
}
