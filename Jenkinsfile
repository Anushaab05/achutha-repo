pipeline {
  agent any

  environment {
    IMAGE = "<dockerhub-username>/devops-app"
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/<username>/devops-project.git'
      }
    }

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('Build Docker') {
      steps {
        sh 'docker build -t $IMAGE .'
      }
    }

    stage('Push Docker') {
      steps {
        sh 'docker push $IMAGE'
      }
    }
  }
}

