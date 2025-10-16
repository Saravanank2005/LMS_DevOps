import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUser, logout } from '../api/api'

export default function Navbar() {
  const user = getUser()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">🎓 LearnHub</Link>
        <Link to="/courses">📚 Courses</Link>
        {user && <Link to="/dashboard">🏠 Dashboard</Link>}
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <span className="muted">👤 {user.username}</span>
            <button className="link" onClick={handleLogout}>🚪 Logout</button>
          </>
        ) : (
          <Link to="/login">🔐 Login</Link>
        )}
      </div>
    </nav>
  )
}
