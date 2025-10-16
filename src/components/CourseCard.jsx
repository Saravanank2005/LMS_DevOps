import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  return (
    <article className="card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p className="muted">
        📖 {course.lessons?.length || 0} Lessons
      </p>
      <Link to={`/courses/${course.id}`}>View Course →</Link>
    </article>
  )
}
