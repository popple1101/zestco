import React from "react";
import useLocalState from "./hooks/useLocalState.jsx";

export default function AdminNotices() {
  const [rows, setRows] = useLocalState("cms_notices", []);
  function add(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const n = {
      id: crypto.randomUUID(),
      title: fd.get("title"),
      date: fd.get("date") || new Date().toISOString().slice(0, 10),
      body: fd.get("body"),
    };
    setRows([n, ...rows]);
    e.currentTarget.reset();
  }
  function remove(id) {
    setRows(rows.filter((r) => r.id !== id));
  }

  return (
    <section className="section">
      <h1>Notices</h1>
      <div className="admin-grid-1-1">
        <div className="card">
          <b>작성</b>
          <form onSubmit={add} className="form-grid mt-8">
            <input name="title" placeholder="제목" required />
            <input name="date" type="date" />
            <textarea name="body" rows={6} placeholder="내용" />
            <button type="submit">발행</button>
          </form>
        </div>
        <div className="card">
          <b>목록</b>
          <table className="table mt-8">
            <thead>
              <tr>
                <th>제목</th>
                <th>작성일</th>
                <th>작업</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td>{r.title}</td>
                  <td>{r.date}</td>
                  <td>
                    <button onClick={() => remove(r.id)}>삭제</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
