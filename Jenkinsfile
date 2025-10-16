pipeline {
    agent any

    environment {
        IMAGE_NAME = "lms-app:latest"
        CONTAINER_NAME = "lms-container"
    }

    options {
        timeout(time: 90, unit: 'MINUTES')  // handles long builds
        // Ensure timestamps in logs
        timestamps()
    }

    stages {

        stage('Clone Repo') {
            steps {
                // Wrap in try-catch to prevent pipeline from failing silently
                script {
                    try {
                        git branch: 'main', url: 'https://github.com/Saravanank2005/LMS_DevOps.git'
                    } catch (err) {
                        error("❌ Failed to clone repo: ${err}")
                    }
                }
            }
        }

        stage('Frontend Build') {
            steps {
                dir('lms-frontend') {  // adjust if your frontend folder has a different name
                    script {
                        try {
                            sh 'npm install'
                            sh 'npm run build'
                        } catch (err) {
                            error("❌ Frontend build failed: ${err}")
                        }
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    try {
                        sh "docker build -t ${IMAGE_NAME} ."
                    } catch (err) {
                        error("❌ Docker build failed: ${err}")
                    }
                }
            }
        }

        stage('Stop Old Container') {
            steps {
                script {
                    // Safe stop & remove
                    sh """
                    docker stop ${CONTAINER_NAME} || echo "No old container to stop"
                    docker rm ${CONTAINER_NAME} || echo "No old container to remove"
                    """
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    try {
                        sh "docker run -d -p 80:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
                    } catch (err) {
                        error("❌ Failed to run container: ${err}")
                    }
                }
            }
        }
    }

    post {
        success {
            echo "✅ LMS app deployed successfully!"
            echo "🌐 Visit: http://<your-server-ip>/"
        }
        failure {
            echo "❌ Deployment failed. Check Jenkins logs."
        }
    }
}