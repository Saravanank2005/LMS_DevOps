import React from 'react'
import { motion } from 'framer-motion'

export function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <div className="skeleton h-48 rounded-t-xl" />
      <div className="p-6 space-y-3">
        <div className="skeleton h-6 w-3/4 rounded" />
        <div className="skeleton h-4 w-full rounded" />
        <div className="skeleton h-4 w-5/6 rounded" />
        <div className="flex gap-2 mt-4">
          <div className="skeleton h-8 w-20 rounded" />
          <div className="skeleton h-8 w-20 rounded" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonList() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg space-y-4">
      <div className="skeleton h-6 w-1/3 rounded" />
      <div className="skeleton h-4 w-full rounded" />
      <div className="skeleton h-4 w-5/6 rounded" />
      <div className="flex gap-4 mt-4">
        <div className="skeleton h-10 w-32 rounded" />
        <div className="skeleton h-10 w-32 rounded" />
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, idx) => (
        <div
          key={idx}
          className="skeleton h-4 rounded"
          style={{ width: `${100 - idx * 10}%` }}
        />
      ))}
    </div>
  )
}

export function SkeletonAvatar({ size = 'md' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }

  return (
    <div className={`skeleton rounded-full ${sizeClasses[size]}`} />
  )
}

export function SkeletonGrid({ count = 6 }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </div>
  )
}

export default function Skeleton({ type = 'card', ...props }) {
  switch (type) {
    case 'card':
      return <SkeletonCard {...props} />
    case 'list':
      return <SkeletonList {...props} />
    case 'text':
      return <SkeletonText {...props} />
    case 'avatar':
      return <SkeletonAvatar {...props} />
    case 'grid':
      return <SkeletonGrid {...props} />
    default:
      return <SkeletonCard {...props} />
  }
}
