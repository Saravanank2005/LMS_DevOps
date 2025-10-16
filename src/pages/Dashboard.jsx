import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiBook, FiCheckCircle, FiTrendingUp, FiAward, FiClock, FiTarget, FiSettings, FiUser, FiLogOut, FiHelpCircle } from 'react-icons/fi'
import { getUser, logout } from '../api/api'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const user = getUser()
  const navigate = useNavigate()
  const [activeSidebarItem, setActiveSidebarItem] = useState('overview')

  const stats = [
    { icon: FiBook, label: 'Courses Enrolled', value: '3', color: 'from-blue-500 to-cyan-500', change: '+2 this month' },
    { icon: FiCheckCircle, label: 'Completed', value: '1', color: 'from-green-500 to-teal-500', change: '33% completion' },
    { icon: FiTrendingUp, label: 'Learning Streak', value: '7 days', color: 'from-orange-500 to-red-500', change: 'Keep going!' },
    { icon: FiAward, label: 'Certificates', value: '1', color: 'from-purple-500 to-pink-500', change: '2 more to go' },
  ]

  const sidebarItems = [
    { id: 'overview', icon: FiTarget, label: 'Overview' },
    { id: 'courses', icon: FiBook, label: 'My Courses' },
    { id: 'progress', icon: FiTrendingUp, label: 'Progress' },
    { id: 'settings', icon: FiSettings, label: 'Settings' },
    { id: 'help', icon: FiHelpCircle, label: 'Help' },
  ]

  const recentCourses = [
    { id: 'c1', title: 'Introduction to DevOps', progress: 60, lastAccessed: '2 hours ago' },
    { id: 'c2', title: 'React for Beginners', progress: 40, lastAccessed: '1 day ago' },
    { id: 'c3', title: 'Python Programming', progress: 20, lastAccessed: '3 days ago' },
  ]

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <div className="container-custom">
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg sticky top-24">
            {/* User Profile */}
            <div className="text-center mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                {user?.username?.charAt(0).toUpperCase()}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                {user?.username}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Student</p>
            </div>

            {/* Navigation */}
            <nav className="space-y-2 mb-6">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSidebarItem(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeSidebarItem === item.id
                        ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              })}
            </nav>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
            >
              <FiLogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3">
          {/* Welcome Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white mb-8"
          >
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {user?.username}! 👋
            </h1>
            <p className="text-blue-100">
              Ready to continue your learning journey? You're doing great!
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    {stat.change}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Continue Learning Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Continue Learning
              </h2>
              <Link
                to="/courses"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {recentCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {course.title}
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      <FiClock className="inline w-4 h-4 mr-1" />
                      {course.lastAccessed}
                    </span>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Progress</span>
                      <span className="font-semibold text-primary-600 dark:text-primary-400">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
                  >
                    <span>Continue Learning</span>
                    <FiTrendingUp className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Link
                  to="/courses"
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <FiBook className="w-5 h-5 text-primary-600" />
                  <span className="font-medium text-gray-900 dark:text-white">
                    Browse Courses
                  </span>
                </Link>
                <Link
                  to="/feedback"
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <FiHelpCircle className="w-5 h-5 text-primary-600" />
                  <span className="font-medium text-gray-900 dark:text-white">
                    Send Feedback
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Need Help?</h3>
              <p className="text-blue-100 mb-4">
                Our support team is here to assist you 24/7
              </p>
              <button className="px-4 py-2 bg-white text-primary-700 font-semibold rounded-lg hover:shadow-lg transition-all">
                Contact Support
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
