import React from "react";
import useLocalState from "./hooks/useLocalState.jsx";

export default function AdminProducts() {
  const [rows, setRows] = useLocalState("cms_products", []);
  function add(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const p = {
      id: crypto.randomUUID(),
      name: fd.get("name"),
      status: fd.get("status") || "public",
      price: Number(fd.get("price") || 0),
    };
    setRows([p, ...rows]);
    e.currentTarget.reset();
  }
  function remove(id) {
    setRows(rows.filter((r) => r.id !== id));
  }

  return (
    <section className="section">
      <h1>Products</h1>
      <div className="admin-grid-1-1">
        <div className="card">
          <b>추가</b>
          <form onSubmit={add} className="form-grid mt-8">
            <input name="name" placeholder="이름" required />
            <input name="price" type="number" step="0.01" placeholder="가격" />
            <select name="status" defaultValue="public">
              <option value="public">공개</option>
              <option value="draft">비공개</option>
            </select>
            <button type="submit">저장</button>
          </form>
        </div>
        <div className="card">
          <b>목록</b>
          <table className="table mt-8">
            <thead>
              <tr>
                <th>이름</th>
                <th>상태</th>
                <th>가격</th>
                <th>작업</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td>{r.name}</td>
                  <td>{r.status === "draft" ? "비공개" : "공개"}</td>
                  <td>
                    {typeof r.price === "number"
                      ? r.price.toLocaleString()
                      : "-"}
                  </td>
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
