import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import "./admin.css";

const menu = [
  { to: "/admin", label: "Dashboard", end: true },
  { to: "/admin/pages", label: "Pages" },
  { to: "/admin/products", label: "Products" },
  { to: "/admin/media", label: "Media" },
  { to: "/admin/notices", label: "Notices" },
  { to: "/admin/analytics", label: "Analytics" },
  { to: "/admin/settings", label: "Settings" },
];

export default function AdminLayout() {
  return (
    <div className="admin">
      <aside className="admin-aside">
        <Link to="/about" className="admin-logo">
          YOUR BRAND
        </Link>
        <nav className="admin-nav">
          {menu.map((m) => (
            <NavLink
              key={m.to}
              to={m.to}
              end={m.end}
              className={({ isActive }) =>
                isActive ? "admin-link active" : "admin-link"
              }
            >
              {m.label}
            </NavLink>
          ))}
        </nav>
        <div className="admin-aside-foot">
          <Link to="/about">← 사이트 보기</Link>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-top">
          <b>Admin</b>
          <div className="muted">라이트 CMS(로컬 저장소)</div>
        </header>
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
