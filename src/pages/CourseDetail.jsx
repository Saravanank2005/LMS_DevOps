import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCourse, getUser, submitQuiz } from '../api/api'
import QuizForm from '../components/QuizForm'

export default function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    let mounted = true
    getCourse(id).then((c) => mounted && setCourse(c))
    return () => (mounted = false)
  }, [id])

  async function handleSubmit(answers) {
    const user = getUser()
    const res = await submitQuiz({ courseId: id, user, answers })
    setMessage(`🎉 Quiz submitted successfully! Your score: ${res.score}`)
  }

  if (!course) {
    return (
      <section style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '3rem' }}>⏳</div>
        <p>Loading course...</p>
      </section>
    )
  }

  return (
    <>
      <section>
        <div style={{ marginBottom: '1rem' }}>
          <Link to="/courses" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
            ← Back to Courses
          </Link>
        </div>
        
        <h2>{course.title}</h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', marginBottom: '2rem' }}>
          {course.description}
        </p>

        <div style={{ 
          background: 'linear-gradient(135deg, var(--gray-50), var(--gray-100))', 
          padding: '1.5rem', 
          borderRadius: '0.75rem',
          marginBottom: '2rem'
        }}>
          <p style={{ margin: 0, color: 'var(--gray-700)' }}>
            📚 <strong>{course.lessons?.length || 0} Lessons</strong> • 
            ❓ <strong>{course.quiz?.questions?.length || 0} Quiz Questions</strong>
          </p>
        </div>

        <h3>📖 Course Lessons</h3>
        <ul>
          {course.lessons.map((l, idx) => (
            <li key={l}>
              <strong>Lesson {idx + 1}:</strong> {l}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>✏️ Take the Quiz</h3>
        <p className="muted" style={{ marginBottom: '1.5rem' }}>
          Test your knowledge by completing the quiz below.
        </p>
        <QuizForm questions={course.quiz.questions} onSubmit={handleSubmit} />

        {message && <div className="notice">{message}</div>}
      </section>
    </>
  )
}
