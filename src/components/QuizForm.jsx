import React, { useState } from 'react'

export default function QuizForm({ questions = [], onSubmit }) {
  const [answers, setAnswers] = useState({})

  function handleChange(qid, value) {
    setAnswers((s) => ({ ...s, [qid]: value }))
  }

  function submit(e) {
    e.preventDefault()
    onSubmit(answers)
  }

  if (questions.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        background: 'var(--gray-50)', 
        borderRadius: '0.75rem' 
      }}>
        <p className="muted">No quiz questions available for this course yet.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="form">
      {questions.map((q, idx) => (
        <fieldset key={q.id}>
          <legend>
            <strong>Question {idx + 1}:</strong> {q.text}
          </legend>
          {(q.choices || []).map((c) => (
            <label key={c}>
              <input
                type="radio"
                name={q.id}
                value={c}
                onChange={(e) => handleChange(q.id, e.target.value)}
                required
              />
              <span>{c}</span>
            </label>
          ))}
        </fieldset>
      ))}
      <button type="submit">✅ Submit Quiz</button>
    </form>
  )
}
