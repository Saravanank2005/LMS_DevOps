import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiBook, FiClock, FiStar, FiArrowRight } from 'react-icons/fi'

export default function CourseCard({ course, index = 0 }) {
  const courseImages = [
    'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
    'https://images.unsplash.com/photo-1550439062-609e1531270e?w=400',
  ]

  const imageUrl = courseImages[index % courseImages.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="card group cursor-pointer"
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden rounded-t-xl -m-px">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 z-10" />
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-6xl">
          📚
        </div>
        <div className="absolute top-3 right-3 z-20 px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-sm font-semibold flex items-center gap-1">
          <FiStar className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-gray-900 dark:text-white">4.8</span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
          <FiBook className="w-4 h-4" />
          <span>Online Course</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {course.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Course Meta */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FiBook className="w-4 h-4" />
            <span>{course.lessons?.length || 0} Lessons</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FiClock className="w-4 h-4" />
            <span>{Math.floor(Math.random() * 10) + 5}h</span>
          </div>
        </div>

        {/* Enroll Button */}
        <Link
          to={`/courses/${course.id}`}
          className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 group-hover:from-primary-700 group-hover:to-primary-800"
        >
          <span>View Course</span>
          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  )
}
