pipeline {
  agent any
  options { timestamps() }

  environment {
    // โฟลเดอร์ปลายทางภายในคอนเทนเนอร์
    // บนเครื่องคุณจะเห็นที่ E:\Learn\Deploy\output ถ้าคุณแมพ jenkins_home มาที่ E:\Learn\Deploy
    OUTPUT_DIR = 'E:/Learn/Deploy'
    BUN_BIN    = "$HOME/.bun/bin"
    BUN_INSTALL = "$HOME/.bun"
  }

  stages {
    // ถ้าใช้ "Pipeline script from SCM" จะมี Declarative: Checkout SCM ให้อยู่แล้ว
    // สามารถลบ stage Checkout นี้ทิ้งได้ หรือคงไว้ก็ไม่ผิด
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Setup Bun & Build') {
      steps {
        sh '''
          set -e

          # ติดตั้ง bun ถ้ายังไม่มี
          if ! command -v bun >/dev/null 2>&1; then
            curl -fsSL https://bun.sh/install | bash
          fi

          export BUN_INSTALL="$HOME/.bun"
          export PATH="$BUN_INSTALL/bin:$PATH"

          bun --version

          # ติดตั้ง dependencies
          if [ -f bun.lockb ]; then
            bun install --frozen-lockfile
          else
            bun install
          fi

          # สร้างไฟล์ build (สำหรับ Vite/CRA จะได้โฟลเดอร์ dist/)
          # ถ้าใน package.json ไม่มีสคริปต์ build ให้ปรับคำสั่งตามโปรเจกต์จริง
          bun run build
        '''
      }
    }

    stage('Copy build to OUTPUT_DIR') {
      steps {
        sh '''
          set -e
          if [ ! -d "dist" ]; then
            echo "❌ ไม่พบโฟลเดอร์ dist — โปรดเช็คว่าโปรเจกต์ของคุณ build ออกมาเป็น dist/ จริงหรือไม่"
            echo "   ถ้าเป็น Next.js ต้องใช้คำสั่งอื่น (เช่น next build + next export -> out/)"
            exit 1
          fi

          mkdir -p "$OUTPUT_DIR"
          rm -rf "$OUTPUT_DIR"/* || true
          cp -r dist/* "$OUTPUT_DIR"/

          echo "✅ คัดลอกไฟล์แล้ว ไปที่: $OUTPUT_DIR"
        '''
      }
    }
  }

  post {
    success {
      echo "✅ สำเร็จ! ไฟล์อยู่ในคอนเทนเนอร์ที่ ${env.OUTPUT_DIR}"
      echo "💡 ถ้าแมพ /var/jenkins_home ไป E:/Learn/Deploy จะเห็นผลที่ E:\\Learn\\Deploy\\output"
    }
    failure {
      echo "❌ ล้มเหลว — เปิด Console Output ดูขั้นที่ fail"
    }
  }
}
