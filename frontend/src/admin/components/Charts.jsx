import React from "react";

export function LineChart({ data, w = 520, h = 160, strokeWidth = 2 }) {
  if (!data?.length) return <div className="muted">데이터 없음</div>;
  const minX = Math.min(...data.map((d) => d.x));
  const maxX = Math.max(...data.map((d) => d.x));
  const minY = 0;
  const maxY = Math.max(...data.map((d) => d.y)) || 1;
  const pad = 10;
  const X = (v) => pad + ((v - minX) / (maxX - minX || 1)) * (w - pad * 2);
  const Y = (v) => h - pad - ((v - minY) / (maxY - minY || 1)) * (h - pad * 2);
  const points = data.map((d) => `${X(d.x)},${Y(d.y)}`).join(" ");
  const area = `M ${X(minX)},${Y(0)} L ${points} L ${X(maxX)},${Y(0)} Z`;

  return (
    <svg width={w} height={h} style={{ display: "block" }}>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopOpacity="0.2" />
          <stop offset="100%" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#g)" />
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function Stat({ label, value, sub }) {
  return (
    <div className="card stat">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      {sub && <div className="stat-sub">{sub}</div>}
    </div>
  );
}
