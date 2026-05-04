const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        walk(path.join(dir, file), fileList);
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        fileList.push(path.join(dir, file));
      }
    }
  }
  return fileList;
}

const srcDir = path.join(__dirname, 'src');
const files = walk(srcDir);

let updatedFilesCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  
  if (content.includes('router.push') && !content.includes('const router = useRouter()')) {
    // Find the component definition to inject const router = useRouter();
    // Assuming standard formats like `const ComponentName = () => {` or `export default function ComponentName() {`
    
    // Replace arrow functions
    content = content.replace(/(const\s+[A-Za-z0-9_]+\s*=\s*\([^)]*\)\s*=>\s*\{)/g, '$1\n  const router = useRouter();');
    
    // Replace traditional functions
    content = content.replace(/(export\s+default\s+function\s+[A-Za-z0-9_]+\s*\([^)]*\)\s*\{)/g, '$1\n  const router = useRouter();');
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Fixed missing router in ${file}`);
    updatedFilesCount++;
  }
}

console.log(`Total fixed files: ${updatedFilesCount}`);
