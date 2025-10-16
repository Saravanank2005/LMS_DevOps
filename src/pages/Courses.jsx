import React, { useEffect, useState } from 'react'
import { listCourses } from '../api/api'
import CourseCard from '../components/CourseCard'

export default function Courses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    listCourses().then((data) => {
      if (mounted) {
        setCourses(data)
        setLoading(false)
      }
    })
    return () => (mounted = false)
  }, [])

  if (loading) {
    return (
      <section style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '3rem' }}>⏳</div>
        <p>Loading courses...</p>
      </section>
    )
  }

  return (
    <section>
      <div style={{ marginBottom: '2rem' }}>
        <h2>📚 Available Courses</h2>
        <p className="muted">
          Explore our curated selection of courses designed to help you master new skills.
        </p>
      </div>

      {courses.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem 2rem', 
          background: 'var(--gray-50)', 
          borderRadius: '1rem' 
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📭</div>
          <p>No courses available at the moment. Check back soon!</p>
        </div>
      ) : (
        <div className="grid">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      )}
    </section>
  )
}
