import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles.css";

import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Brand from "./pages/Brand.jsx";
import Products from "./pages/Products.jsx";
import WhereToBuy from "./pages/WhereToBuy.jsx";
import SNS from "./pages/SNS.jsx";
import Contact from "./pages/Contact.jsx";
import Notice from "./pages/Notice.jsx";
import NotFound from "./pages/NotFound.jsx";

import AdminLayout from "./admin/AdminLayout.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import AdminPages from "./admin/AdminPages.jsx";
import AdminProducts from "./admin/AdminProducts.jsx";
import AdminMedia from "./admin/AdminMedia.jsx";
import AdminNotices from "./admin/AdminNotices.jsx";
import AdminAnalytics from "./admin/AdminAnalytics.jsx";
import AdminSettings from "./admin/AdminSettings.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* 공개 사이트 */}
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/products" element={<Products />} />
          <Route path="/where-to-buy" element={<WhereToBuy />} />
          <Route path="/sns" element={<SNS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* 관리자 */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="pages" element={<AdminPages />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="media" element={<AdminMedia />} />
          <Route path="notices" element={<AdminNotices />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
