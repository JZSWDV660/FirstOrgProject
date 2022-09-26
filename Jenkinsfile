#!groovy 

node {
   
   env.NODEJS_HOME = "${tool 'Node18'}"
   env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
   sh 'npm --version'
   
   stage 'Checkout'
        checkout scm

   stage 'Setup'
        sh 'npm config set registry  http://registry.npmjs.org/'
        sh 'npm set strict-ssl=false'
        sh 'npm install'

   stage 'Mocha test'
        sh './node_modules/mocha/bin/mocha'

   stage 'Cleanup'
        echo 'prune and cleanup'
        sh 'npm prune'
        sh 'rm node_modules -rf'
}
