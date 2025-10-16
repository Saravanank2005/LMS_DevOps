import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1>🎓 Welcome to LearnHub</h1>
        <p>
          Your gateway to world-class learning. Explore courses, master new skills, 
          and achieve your educational goals with our modern learning platform.
        </p>
        <Link to="/courses" className="btn" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
          Browse Courses →
        </Link>
      </div>

      <section>
        <h2>Why Choose LearnHub?</h2>
        <div className="grid">
          <div className="card">
            <h3>💡 Expert-Led Courses</h3>
            <p>Learn from industry professionals with real-world experience in their fields.</p>
          </div>
          <div className="card">
            <h3>🚀 Self-Paced Learning</h3>
            <p>Study at your own pace, anytime and anywhere that works for you.</p>
          </div>
          <div className="card">
            <h3>📊 Track Your Progress</h3>
            <p>Monitor your learning journey with quizzes, assignments, and detailed analytics.</p>
          </div>
          <div className="card">
            <h3>🏆 Earn Certificates</h3>
            <p>Get recognized for your achievements with industry-recognized certificates.</p>
          </div>
          <div className="card">
            <h3>🤝 Community Support</h3>
            <p>Connect with fellow learners and instructors in our vibrant community.</p>
          </div>
          <div className="card">
            <h3>📱 Mobile Friendly</h3>
            <p>Access your courses on any device - desktop, tablet, or mobile.</p>
          </div>
        </div>
      </section>
    </>
  )
}
