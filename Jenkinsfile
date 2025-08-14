pipeline {
  agent any
  environment {
    OUTPUT_DIR = 'E:/Learn/Deploy'  
    BUN_BIN    = "$HOME/.bun/bin"
  }
  options { timestamps() }  

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Setup Bun & Build') {
      steps {
        bat '''
          if not exist "%USERPROFILE%\\.bun\\bin\\bun.exe" powershell -NoProfile -Command "iwr https://bun.sh/install -useb | cmd"
          set PATH=%USERPROFILE%\\.bun\\bin;%PATH%
          bun --version
          bun install --frozen-lockfile
          bun run build
        '''
      }
    }

    stage('Copy build to OUTPUT_DIR') {
      steps {
        bat '''
          if not exist "%OUTPUT_DIR%" mkdir "%OUTPUT_DIR%"
          powershell -NoProfile -Command "Remove-Item -Recurse -Force -ErrorAction SilentlyContinue '%OUTPUT_DIR%\\*'"
          if not exist dist (echo dist not found & exit /b 1)
          xcopy dist "%OUTPUT_DIR%" /E /I /Y
        '''
      }
    }
  }

  post {
    success { echo "✅ Build เสร็จและคัดลอกไปที่: ${env.OUTPUT_DIR}" }
    failure { echo "❌ Build ล้มเหลว — เช็ค Console Output" }
  }
}
