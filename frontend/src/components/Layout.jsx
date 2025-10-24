import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

const NAV = [
  { to: "/about", label: "About us & History" },
  { to: "/brand", label: "Brand" },
  { to: "/products", label: "Products" },
  { to: "/where-to-buy", label: "Where to Buy" },
  { to: "/sns", label: "SNS" },
  { to: "/contact", label: "Contact" },
  { to: "/notice", label: "Notice" },
];

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/about" style={{ fontWeight: 700, marginRight: 8 }}>
            LOGO
          </Link>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
          <div style={{ marginLeft: "auto" }}>
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Admin
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          © {new Date().getFullYear()} Your Brand
        </div>
      </footer>
    </>
  );
}
