pipeline {
    agent any

    environment {
        IMAGE_NAME = "lms-app:latest"
        CONTAINER_NAME = "lms-container"
    }

    stages {
        stage('Clone Repo') {
            steps {
                echo "Cloning LMS repo..."
                git branch: 'main', url: 'https://github.com/Saravanank2005/LMS_DevOps.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                script {
                    docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                echo "Stopping any existing container..."
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"

                echo "Running new container on port 80..."
                sh "docker run -d -p 80:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }

    post {
        success {
            echo "✅ LMS app deployed successfully!"
        }
        failure {
            echo "❌ Deployment failed. Check Jenkins logs."
        }
    }
}