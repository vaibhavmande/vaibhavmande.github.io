const fs = require('fs');
const path = require('path');

const BUILD_DIR = 'build';

try {
  // Clean build directory
  if (fs.existsSync(BUILD_DIR)) {
    fs.rmSync(BUILD_DIR, { recursive: true });
  }

  // Create build directory structure
  fs.mkdirSync(BUILD_DIR, { recursive: true });
  fs.mkdirSync(path.join(BUILD_DIR, 'dist/css'), { recursive: true });
  fs.mkdirSync(path.join(BUILD_DIR, 'src/images'), { recursive: true });

  // Copy files
  const filesToCopy = [
    { src: 'index.html', dest: 'index.html', required: true },
    { src: 'CNAME', dest: 'CNAME', required: false },
    { src: 'dist/css/main.css', dest: 'dist/css/main.css', required: true },
    { src: 'src/images/favicon.ico', dest: 'src/images/favicon.ico', required: true }
  ];

  const missingRequired = [];

  filesToCopy.forEach(({ src, dest, required }) => {
    const srcPath = path.join(process.cwd(), src);
    const destPath = path.join(BUILD_DIR, dest);
    
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ Copied ${src}`);
    } else if (required) {
      missingRequired.push(src);
      console.error(`✗ Required file missing: ${src}`);
    } else {
      console.warn(`⚠ Optional file not found, skipping: ${src}`);
    }
  });

  if (missingRequired.length > 0) {
    console.error(`\n✗ Build failed! Missing required files: ${missingRequired.join(', ')}`);
    process.exit(1);
  }

  console.log(`\n✓ Build complete! Output in ./${BUILD_DIR}/`);
  process.exit(0);

} catch (error) {
  console.error(`\n✗ Build failed with error: ${error.message}`);
  console.error(error.stack);
  process.exit(1);
}
