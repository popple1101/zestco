import React from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
      <header>
        <nav>
          <b>Admin</b>
          <NavLink to="/admin" end className={({isActive}) => isActive ? 'active' : ''}>Dashboard</NavLink>
          <NavLink to="/admin/products" className={({isActive}) => isActive ? 'active' : ''}>Products</NavLink>
          <NavLink to="/admin/notices" className={({isActive}) => isActive ? 'active' : ''}>Notices</NavLink>
          <div style={{marginLeft:'auto'}}>
            <Link to="/about">← Back to site</Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
