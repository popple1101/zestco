import React from "react";
import useLocalState from "./hooks/useLocalState.jsx";
import { LineChart, Stat } from "./components/Charts.jsx";

function daySeries(byDay) {
  const days = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (13 - i));
    const key = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    return { x: key, y: byDay?.[key] || 0 };
  });
  return days;
}

export default function Dashboard() {
  const [vis] = useLocalState("cms_visits", {});
  const [notices] = useLocalState("cms_notices", []);
  const [products] = useLocalState("cms_products", []);
  const totalPV = vis?.total || 0;
  const byPath = vis?.byPath || {};
  const topPath =
    Object.entries(byPath).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "-";

  return (
    <section className="section">
      <h1>Dashboard</h1>
      <div className="grid">
        <Stat label="총 조회수" value={totalPV} sub={topPath} />
        <Stat label="제품 수" value={products.length} />
        <Stat label="공지 수" value={notices.length} />
        <Stat label="페이지 수" value={Object.keys(byPath).length} />
      </div>

      <div className="card mt-16">
        <div className="flex justify-between items-center">
          <b>최근 14일(PV)</b>
          <span className="muted">공개 사이트에서 자동 집계</span>
        </div>
        <LineChart data={daySeries(vis?.byDay)} />
      </div>

      <div className="grid mt-16">
        <div className="card">
          <b>상위 페이지</b>
          <table className="table mt-8">
            <thead>
              <tr>
                <th>경로</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(byPath)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 6)
                .map(([p, c]) => (
                  <tr key={p}>
                    <td>{p}</td>
                    <td>{c}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="card">
          <b>빠른 작업</b>
          <ul className="mt-8">
            <li>
              <a href="/admin/pages">페이지 편집</a>
            </li>
            <li>
              <a href="/admin/media">이미지 업로드</a>
            </li>
            <li>
              <a href="/admin/notices">공지 작성</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
