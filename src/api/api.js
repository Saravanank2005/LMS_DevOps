// Lightweight API layer that currently uses mock data but can be swapped
// to real endpoints easily by replacing the fetch/mock implementations.
const STORAGE_USER_KEY = 'lms_user'

// Simple structured logger for JSON logs (ELK-friendly)
function log(level, message, meta = {}) {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    meta,
  }
  // Write to console as JSON so stdout can be ingested by ELK
  console.log(JSON.stringify(entry))
}

// Mock courses dataset
const COURSES = [
  {
    id: 'c1',
    title: 'Introduction to DevOps',
    description: 'Learn the fundamentals of DevOps practices including CI/CD, automation, and infrastructure management.',
    lessons: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Container Orchestration', 'GitOps Workflows'],
    quiz: {
      questions: [
        { id: 'q1', text: 'What does CI stand for?', choices: ['Continuous Integration', 'Code Inspection', 'Central Intelligence', 'Continuous Iteration'] },
        { id: 'q2', text: 'Which tool is commonly used for container orchestration?', choices: ['Kubernetes', 'Notepad', 'Excel', 'Paint'] },
      ],
    },
  },
  {
    id: 'c2',
    title: 'React for Beginners',
    description: 'Build modern, interactive user interfaces with React - the most popular JavaScript library for web development.',
    lessons: ['Introduction to JSX', 'Components & Props', 'State Management', 'Hooks Deep Dive', 'React Router'],
    quiz: {
      questions: [
        { id: 'q1', text: 'What hook is used for state management?', choices: ['useState', 'useEffect', 'useContext', 'useRef'] },
        { id: 'q2', text: 'What does JSX stand for?', choices: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'JavaScript Extra'] },
      ],
    },
  },
  {
    id: 'c3',
    title: 'Python Programming Masterclass',
    description: 'Master Python from basics to advanced concepts including data structures, OOP, and popular frameworks.',
    lessons: ['Python Basics', 'Data Structures', 'Object-Oriented Programming', 'File Handling', 'Web Scraping', 'APIs and REST'],
    quiz: {
      questions: [
        { id: 'q1', text: 'Which of these is a Python web framework?', choices: ['Django', 'React', 'Angular', 'Vue'] },
        { id: 'q2', text: 'What is the correct file extension for Python files?', choices: ['.py', '.python', '.pt', '.p'] },
      ],
    },
  },
  {
    id: 'c4',
    title: 'AWS Cloud Practitioner',
    description: 'Get started with Amazon Web Services and learn cloud computing fundamentals, core services, and best practices.',
    lessons: ['Cloud Computing Basics', 'EC2 & Compute Services', 'S3 & Storage Solutions', 'Networking & VPC', 'Security & IAM', 'Cost Optimization'],
    quiz: {
      questions: [
        { id: 'q1', text: 'What does EC2 stand for?', choices: ['Elastic Compute Cloud', 'Easy Cloud Computing', 'Elastic Container Cloud', 'Enterprise Computing Cloud'] },
        { id: 'q2', text: 'Which AWS service is used for object storage?', choices: ['S3', 'EC2', 'Lambda', 'RDS'] },
      ],
    },
  },
  {
    id: 'c5',
    title: 'Full Stack Web Development',
    description: 'Learn to build complete web applications from frontend to backend, databases, and deployment.',
    lessons: ['HTML & CSS Fundamentals', 'JavaScript ES6+', 'Node.js & Express', 'Database Design', 'RESTful APIs', 'Authentication & Security'],
    quiz: {
      questions: [
        { id: 'q1', text: 'What does REST stand for?', choices: ['Representational State Transfer', 'Remote State Transfer', 'Request State Transfer', 'Real State Transfer'] },
        { id: 'q2', text: 'Which is a popular Node.js framework?', choices: ['Express', 'Django', 'Flask', 'Spring'] },
      ],
    },
  },
  {
    id: 'c6',
    title: 'Machine Learning Fundamentals',
    description: 'Dive into the world of AI and machine learning with practical examples and real-world applications.',
    lessons: ['Introduction to ML', 'Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'Model Evaluation', 'Deep Learning Basics'],
    quiz: {
      questions: [
        { id: 'q1', text: 'Which algorithm is used for classification?', choices: ['Decision Trees', 'Linear Regression only', 'K-Means only', 'None'] },
        { id: 'q2', text: 'What library is commonly used for ML in Python?', choices: ['scikit-learn', 'jQuery', 'Bootstrap', 'Lodash'] },
      ],
    },
  },
]

export async function login({ username }) {
  log('info', 'login_attempt', { username })
  // Simulate API latency
  await new Promise((r) => setTimeout(r, 300))
  const user = { username }
  localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user))
  log('info', 'login_success', { username })
  return user
}

export function logout() {
  const user = getUser()
  localStorage.removeItem(STORAGE_USER_KEY)
  log('info', 'logout', { username: user?.username })
}

export function getUser() {
  try {
    const raw = localStorage.getItem(STORAGE_USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (e) {
    return null
  }
}

export async function listCourses() {
  log('info', 'list_courses')
  await new Promise((r) => setTimeout(r, 150))
  return COURSES.map(({ quiz, ...rest }) => rest)
}

export async function getCourse(id) {
  log('info', 'get_course', { id })
  await new Promise((r) => setTimeout(r, 150))
  return COURSES.find((c) => c.id === id) || null
}

export async function submitQuiz({ courseId, user, answers }) {
  log('info', 'submit_quiz_attempt', { courseId, user: user?.username })
  await new Promise((r) => setTimeout(r, 200))
  // Very simple mock grading: return number of answers
  const score = Object.keys(answers || {}).length
  const result = { courseId, user: user?.username, score, submittedAt: new Date().toISOString() }
  log('info', 'submit_quiz_success', { result })
  return result
}
