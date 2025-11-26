pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend Image') {
            steps {
                bat "docker build -t backend-image ./backend"
            }
        }

        stage('Build Frontend Image') {
            steps {
                bat "docker build -t frontend-image ./storyspark-content-hub-main"
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                bat "docker-compose -f docker-compose.yml up -d --build"
            }
        }
    }
}
