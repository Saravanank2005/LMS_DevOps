import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

export default function QuizForm({ questions = [], onSubmit }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(qid, value) {
    setAnswers((s) => ({ ...s, [qid]: value }))
  }

  function submit(e) {
    e.preventDefault()
    setSubmitted(true)
    onSubmit(answers)
  }

  if (questions.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-8 text-center"
      >
        <FiAlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
        <p className="text-gray-600 dark:text-gray-400">
          No quiz questions available for this course yet.
        </p>
      </motion.div>
    )
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <FiCheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
        </motion.div>
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-2">
          Quiz Submitted!
        </h3>
        <p className="text-green-800 dark:text-green-400">
          Your answers have been recorded. Check back later for results.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      {questions.map((q, idx) => (
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 flex items-center justify-center font-bold flex-shrink-0">
              {idx + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {q.text}
              </h3>
            </div>
          </div>

          <div className="space-y-3 ml-11">
            {(q.choices || []).map((c, cIdx) => {
              const isSelected = answers[q.id] === c
              return (
                <label
                  key={cIdx}
                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name={q.id}
                      value={c}
                      onChange={(e) => handleChange(q.id, e.target.value)}
                      required
                      className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                    />
                    <span className={`font-medium ${
                      isSelected
                        ? 'text-primary-700 dark:text-primary-300'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {c}
                    </span>
                  </div>
                </label>
              )
            })}
          </div>
        </motion.div>
      ))}

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        <FiCheckCircle className="w-5 h-5" />
        <span>Submit Quiz</span>
      </motion.button>
    </form>
  )
}

