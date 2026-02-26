const fs = require('fs')
const path = require('path')

const BUILD_DIR = 'build'

try {
  // Clean build directory
  if (fs.existsSync(BUILD_DIR)) {
    fs.rmSync(BUILD_DIR, { recursive: true })
  }

  // Create build directory structure
  fs.mkdirSync(BUILD_DIR, { recursive: true })
  fs.mkdirSync(path.join(BUILD_DIR, 'dist'), { recursive: true }) // Mirror dist/ so index.html keeps working on prod (see PLAN.md § Deployment pipeline)
  fs.mkdirSync(path.join(BUILD_DIR, 'src/images'), { recursive: true })

  // Copy files
  const filesToCopy = [
    { src: 'index.html', dest: 'index.html', required: true },
    { src: 'CNAME', dest: 'CNAME', required: false },
    {
      src: 'dist/main.css',
      dest: 'dist/main.css',
      required: true,
    }, // Preserve dist/main.css path to avoid 404 from index.html link
    {
      src: 'src/images/favicon.ico',
      dest: 'src/images/favicon.ico',
      required: true,
    },
  ]

  const missingRequired = []

  filesToCopy.forEach(({ src, dest, required }) => {
    const srcPath = path.join(process.cwd(), src)
    const destPath = path.join(BUILD_DIR, dest)

    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath)
      console.log(`✓ Copied ${src}`)
    } else if (required) {
      missingRequired.push(src)
      console.error(`✗ Required file missing: ${src}`)
    } else {
      console.warn(`⚠ File not found, skipping: ${src}`)
    }
  })

  if (missingRequired.length > 0) {
    console.error(
      `\n✗ Build failed! Missing required files: ${missingRequired.join(', ')}`,
    )
    process.exit(1)
  }

  console.log(`\n✓ Build complete! Output in ./${BUILD_DIR}/`)
  process.exit(0)
} catch (error) {
  console.error(`\n✗ Build failed with error: ${error.message}`)
  console.error(error.stack)
  process.exit(1)
}
