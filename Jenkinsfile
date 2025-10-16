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
                sh """
                    docker build -t ${IMAGE_NAME} .
                """
            }
        }

        stage('Stop Old Container') {
            steps {
                echo "Stopping old container if exists..."
                sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                """
            }
        }

        stage('Run Docker Container') {
            steps {
                echo "Running new container on port 80..."
                sh """
                    docker run -d -p 80:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}
                """
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