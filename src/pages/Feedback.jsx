import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiStar, FiSend, FiMessageCircle, FiCheckCircle } from 'react-icons/fi'

export default function Feedback() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const categories = [
    { value: 'course', label: 'Course Content' },
    { value: 'platform', label: 'Platform Experience' },
    { value: 'support', label: 'Customer Support' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'bug', label: 'Bug Report' },
    { value: 'other', label: 'Other' },
  ]

  async function handleSubmit(e) {
    e.preventDefault()
    
    setLoading(true)
    
    // Simulate API call
    const feedbackData = {
      rating,
      category,
      message,
      timestamp: new Date().toISOString(),
    }
    
    console.log('📝 Feedback submitted:', JSON.stringify(feedbackData, null, 2))
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setLoading(false)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setRating(0)
      setCategory('')
      setMessage('')
      setSubmitted(false)
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="container-custom">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md mx-auto mt-20 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <FiCheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Thank You!
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Your feedback has been submitted successfully. We appreciate your input!
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FiMessageCircle className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            We'd Love Your Feedback
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Help us improve your learning experience
          </p>
        </div>

        {/* Feedback Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Star Rating */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                How would you rate your experience?
              </label>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="focus:outline-none"
                  >
                    <FiStar
                      className={`w-12 h-12 transition-all ${
                        star <= (hoveredRating || rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  </motion.button>
                ))}
              </div>
              <p className="text-center mt-3 text-gray-600 dark:text-gray-400">
                {rating === 0 && 'Select a rating'}
                {rating === 1 && 'Poor'}
                {rating === 2 && 'Fair'}
                {rating === 3 && 'Good'}
                {rating === 4 && 'Very Good'}
                {rating === 5 && 'Excellent'}
              </p>
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                What is your feedback about?
              </label>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {categories.map((cat) => (
                  <motion.button
                    key={cat.value}
                    type="button"
                    onClick={() => setCategory(cat.value)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      category === cat.value
                        ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                        : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {cat.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Tell us more (optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                maxLength={500}
                placeholder="Share your thoughts, suggestions, or report an issue..."
                className="input resize-none"
              />
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your feedback helps us improve
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {message.length}/500
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={!rating || !category || loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <FiSend className="w-5 h-5" />
                  <span>Submit Feedback</span>
                </>
              )}
            </motion.button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
              💡 Quick Tip
            </h3>
            <p className="text-blue-800 dark:text-blue-400 text-sm">
              Be specific in your feedback to help us understand and address your concerns better.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
            <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
              🎯 We're Listening
            </h3>
            <p className="text-purple-800 dark:text-purple-400 text-sm">
              Every piece of feedback is reviewed by our team to continuously improve your experience.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
