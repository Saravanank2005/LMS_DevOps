import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiBook, FiClock, FiStar, FiUsers, FiAward, FiCheckCircle } from 'react-icons/fi'
import { getCourse, getUser, submitQuiz } from '../api/api'
import QuizForm from '../components/QuizForm'

export default function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [message, setMessage] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')

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
      <div className="container-custom flex flex-col items-center justify-center py-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full"
        />
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading course...</p>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'reviews', label: 'Reviews' },
  ]

  return (
    <div className="container-custom">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6"
      >
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>Back to Courses</span>
        </Link>
      </motion.div>

      {/* Course Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white mb-8"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              <FiBook className="w-4 h-4" />
              <span>Online Course</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {course.title}
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              {course.description}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <FiStar className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                <span className="font-semibold">4.8</span>
                <span className="text-blue-100">(2,340 ratings)</span>
              </div>
              <div className="flex items-center gap-2">
                <FiUsers className="w-5 h-5" />
                <span>15,678 students</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-blue-100">Duration</span>
                <div className="flex items-center gap-2 font-semibold">
                  <FiClock className="w-4 h-4" />
                  <span>{Math.floor(Math.random() * 10) + 5}h total</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-100">Lessons</span>
                <div className="flex items-center gap-2 font-semibold">
                  <FiBook className="w-4 h-4" />
                  <span>{course.lessons?.length || 0} lessons</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-100">Certificate</span>
                <div className="flex items-center gap-2 font-semibold">
                  <FiAward className="w-4 h-4" />
                  <span>Yes</span>
                </div>
              </div>
              <button className="w-full mt-4 px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                Enroll Now - Free
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-2 font-medium whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'border-primary-600 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'overview' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What you'll learn
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {['Master key concepts', 'Build real projects', 'Earn certification', 'Lifetime access'].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Course Description
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {course.description}
            </p>
          </div>
        )}

        {activeTab === 'curriculum' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Course Curriculum
            </h2>
            <div className="space-y-3">
              {course.lessons.map((lesson, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center font-semibold">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {lesson}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <FiClock className="w-4 h-4" />
                    <span>{Math.floor(Math.random() * 30) + 10} min</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Test Your Knowledge
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Complete the quiz below to test your understanding of the course material.
            </p>
            <QuizForm questions={course.quiz.questions} onSubmit={handleSubmit} />
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200"
              >
                {message}
              </motion.div>
            )}
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Student Reviews
            </h2>
            <div className="space-y-6">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="pb-6 border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-semibold">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Student {idx + 1}
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Excellent course! The content is well-structured and easy to follow.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
