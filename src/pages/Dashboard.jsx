import React from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../api/api'

export default function Dashboard() {
  const user = getUser()
  
  return (
    <>
      <div className="dashboard-card">
        <h2>Welcome back, {user?.username}! 👋</h2>
        <p>Ready to continue your learning journey?</p>
      </div>

      <section>
        <h2>Your Learning Stats</h2>
        <div className="grid">
          <div className="card">
            <h3>📚 Courses Enrolled</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>0</p>
            <p className="muted">Start exploring courses</p>
          </div>
          <div className="card">
            <h3>✅ Quizzes Completed</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--success)' }}>0</p>
            <p className="muted">Take your first quiz</p>
          </div>
          <div className="card">
            <h3>🎯 Learning Streak</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--warning)' }}>0 days</p>
            <p className="muted">Keep it up!</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Continue Learning</h2>
        <p>Explore our course catalog to start your learning journey.</p>
        <Link to="/courses" className="btn" style={{ marginTop: '1rem' }}>
          Browse All Courses →
        </Link>
      </section>
    </>
  )
}
