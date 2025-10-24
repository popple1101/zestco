import React, { useEffect } from "react";
import { NavLink, Outlet, Link, useLocation } from "react-router-dom";

const LOGO_URL = `${import.meta.env.BASE_URL}logo.png`;

const NAV = [
  { to: "/about", label: "About us & History" },
  { to: "/brand", label: "Brand" },
  { to: "/products", label: "Products" },
  { to: "/where-to-buy", label: "Where to Buy" },
  { to: "/sns", label: "SNS" },
  { to: "/contact", label: "Contact" },
  { to: "/notice", label: "Notice" },
];

function trackVisit(pathname) {
  const key = "cms_visits";
  const now = new Date();
  const d = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  ).getTime();
  const data = JSON.parse(localStorage.getItem(key) || "{}");
  data.total = (data.total || 0) + 1;
  data.byPath = {
    ...(data.byPath || {}),
    [pathname]: (data.byPath?.[pathname] || 0) + 1,
  };
  data.byDay = { ...(data.byDay || {}), [d]: (data.byDay?.[d] || 0) + 1 };
  localStorage.setItem(key, JSON.stringify(data));
}

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    trackVisit(pathname);
  }, [pathname]);

  return (
    <>
      <header>
        <nav>
          <Link to="/about" className="brand-logo">
            <img src={LOGO_URL} alt="Brand logo" className="brand-logo-img" />
            <b>YOUR BRAND</b>
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
          <div className="nav-right">
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
