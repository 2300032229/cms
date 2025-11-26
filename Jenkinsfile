pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    docker.build('backend', 'backend/')
                }
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    docker.build('frontend', 'storyspark-content-hub-main/')
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}