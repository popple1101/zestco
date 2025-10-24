import React, { useMemo } from "react";
import useLocalState from "./hooks/useLocalState.jsx";
import { LineChart, Stat } from "./components/Charts.jsx";

function toSeries(byDay, days = 30) {
  return Array.from({ length: days }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (days - 1 - i));
    const key = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    return { x: key, y: byDay?.[key] || 0 };
  });
}

export default function AdminAnalytics() {
  const [vis] = useLocalState("cms_visits", {});
  const total = vis?.total || 0;
  const byPath = vis?.byPath || {};
  const byDay = vis?.byDay || {};
  const series30 = useMemo(() => toSeries(byDay, 30), [byDay]);

  return (
    <section className="section">
      <h1>Analytics</h1>
      <div className="grid">
        <Stat label="총 조회수" value={total} />
        <Stat label="페이지 수" value={Object.keys(byPath).length} />
        <Stat
          label="일 평균(30일)"
          value={(series30.reduce((a, b) => a + b.y, 0) / 30).toFixed(1)}
        />
      </div>

      <div className="card mt-16">
        <b>30일 페이지뷰</b>
        <LineChart data={series30} />
      </div>

      <div className="card mt-16">
        <b>페이지별</b>
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
              .map(([p, c]) => (
                <tr key={p}>
                  <td>{p}</td>
                  <td>{c}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
