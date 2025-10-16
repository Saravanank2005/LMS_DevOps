import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/api'

export default function Login() {
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    await login({ username })
    setLoading(false)
    navigate('/dashboard')
  }

  return (
    <section style={{ maxWidth: '500px', margin: '4rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2>🔐 Welcome Back</h2>
        <p className="muted">Login to access your learning dashboard</p>
      </div>
      
      <form onSubmit={handleLogin} className="form">
        <label>
          Username
          <input 
            type="text"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter your username"
            required 
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? '⏳ Logging in...' : '🚀 Login'}
        </button>
      </form>
      
      <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--gray-600)' }}>
        Demo: Enter any username to login
      </p>
    </section>
  )
}
