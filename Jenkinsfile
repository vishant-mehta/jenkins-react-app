pipeline {
     agent any
     stages {
        stage("Install") {
            steps {
                sh "sudo npm install"
            }
        }
        stage("Test") {
            steps {
                sh "sudo npm run test"
            }
        }
        stage("Build") {
            steps {
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}
