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
  
  // We look for files with toast.success and some onSubmit
  if (content.includes('toast.success(') && content.includes('onSubmit=')) {
    
    // Skip if already processed
    if (content.includes('router.push("/thank-you")') || content.includes("router.push('/thank-you')")) {
      continue;
    }

    let modified = false;

    // 1. Add import for useRouter if missing
    if (!content.includes('next/navigation')) {
      const importRegex = /^import.*$/gm;
      let lastImportMatch;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        lastImportMatch = match;
      }
      
      if (lastImportMatch) {
        const insertPos = lastImportMatch.index + lastImportMatch[0].length;
        content = content.slice(0, insertPos) + '\nimport { useRouter } from "next/navigation";' + content.slice(insertPos);
        modified = true;
      } else {
        content = 'import { useRouter } from "next/navigation";\n' + content;
        modified = true;
      }
    } else if (!content.includes('useRouter')) {
      content = content.replace(/import\s+{([^}]*)}\s+from\s+["']next\/navigation["']/, (m, p1) => {
        return `import { useRouter, ${p1} } from "next/navigation"`;
      });
      modified = true;
    }

    // 2. Add const router = useRouter(); inside the component.
    // In some files, it's before `const [step, setStep] = useState(1);`
    // In others, it's before `const [isSubmitting`
    // Let's use a regex that finds the first useState
    if (!content.includes('const router = useRouter()')) {
      const stateRegex = /const\s+\[(isSubmitting|step|submitted|email)/;
      if (stateRegex.test(content)) {
        content = content.replace(stateRegex, 'const router = useRouter();\n  const [$1');
        modified = true;
      }
    }

    // 3. Add router.push('/thank-you'); after toast.success
    const toastSuccessRegex = /(toast\.success\([\s\S]*?\);)/g;
    if (toastSuccessRegex.test(content)) {
      content = content.replace(toastSuccessRegex, '$1\n    router.push("/thank-you");');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(file, content, 'utf-8');
      console.log(`Updated ${file}`);
      updatedFilesCount++;
    }
  }
}

console.log(`Total additional files updated: ${updatedFilesCount}`);
