pipeline {
  agent any

  options {
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '20', artifactNumToKeepStr: '10'))
    disableConcurrentBuilds()
  }

  parameters {
    choice(name: 'ENV', choices: ['uat','prod'], description: 'Target environment')
    string(name: 'NOTES', defaultValue: '', description: 'Optional notes')
  }

  environment {
    HOME        = '/var/jenkins_home'
    BUN_INSTALL = "${HOME}/.bun"
    BUN_BIN     = "${BUN_INSTALL}/bin"
    PATH        = "${BUN_BIN}:${PATH}"

    // Windows host mounts (ต้องแมปมาก่อน)
    UAT_MOUNT  = '/mnt/uat'
    PROD_MOUNT = '/mnt/prod'

    // จะถูกตั้งค่าใน stage Init
    TARGET_DIR = ''
    BUILD_DIR  = ''
    RELEASE_DIR = ''
  }

  stages {
    stage('Init') {
      steps {
        script {
          env.TARGET_DIR = (params.ENV == 'uat') ? env.UAT_MOUNT : env.PROD_MOUNT
          env.RELEASE_DIR = "${env.TARGET_DIR}/releases/${env.BUILD_NUMBER}"
          echo "Deploy target: ${env.TARGET_DIR}"
        }
      }
    }

    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Setup Bun (cached)') {
      steps {
        sh '''
          set -e
          if ! command -v bun >/dev/null 2>&1; then
            curl -fsSL https://bun.sh/install | bash
          fi
          bun --version
        '''
      }
    }

    stage('Install deps & Build') {
      steps {
        sh '''
          set -e
          if [ -f bun.lockb ]; then
            bun install --frozen-lockfile --no-progress
          else
            bun install --no-progress
          fi

          # ปรับตามโปรเจกต์ของคุณ: Vite/CRA -> dist, Next.js static -> out
          bun run build

          if [ -d dist ]; then BUILD_DIR=dist
          elif [ -d out ]; then BUILD_DIR=out
          else
            echo "No dist/ or out/ found"; exit 1
          fi

          echo "${BUILD_DIR}" > .builddir
        '''
      }
    }

    stage('Package Artifact') {
      steps {
        sh '''
          set -e
          BUILD_DIR=$(cat .builddir)
          mkdir -p artifacts
          tar -czf "artifacts/${JOB_NAME}-${params.ENV}-${BUILD_NUMBER}.tar.gz" -C "${BUILD_DIR}" .
        '''
        archiveArtifacts artifacts: 'artifacts/*.tar.gz', fingerprint: true
      }
    }

    stage('Approve Production') {
      when { expression { params.ENV == 'prod' } }
      steps {
        input message: 'ยืนยัน Deploy ไป Production ?', ok: 'Deploy'
      }
    }

    stage('Deploy (copy to mounted folder)') {
      steps {
        sh '''
          set -e
          BUILD_DIR=$(cat .builddir)

          # ตรวจว่า target mount อยู่จริง
          if [ ! -d "${TARGET_DIR}" ]; then
            echo "Target ${TARGET_DIR} not found (mount missing)."; exit 1
          fi

          # สร้าง releases/<build#> และ current
          mkdir -p "${RELEASE_DIR}"
          mkdir -p "${TARGET_DIR}/current"

          # คัดลอกแบบสะอาด
          rm -rf "${RELEASE_DIR:?}/"* || true
          cp -a "${BUILD_DIR}/." "${RELEASE_DIR}/"

          # อัปเดต current ให้เป็น build ล่าสุด (ไม่ใช้ symlink เพื่อให้ทำงานข้าม Windows mount)
          rm -rf "${TARGET_DIR}/current/"* || true
          cp -a "${RELEASE_DIR}/." "${TARGET_DIR}/current/"

          echo "Deployed to ${TARGET_DIR}/current"
        '''
      }
    }
  }

  post {
    success {
      echo "✅ ${params.ENV.toUpperCase()} deployed to ${env.TARGET_DIR}/current"
      echo "ℹ️  Release snapshot: ${env.RELEASE_DIR}"
      echo "📝 Notes: ${params.NOTES}"
    }
    failure {
      echo "❌ Deploy failed — check logs"
    }
  }
}
