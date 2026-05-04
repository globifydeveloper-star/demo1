const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    try {
        const list = fs.readdirSync(dir);
        list.forEach(function(file) {
            file = path.join(dir, file);
            const stat = fs.statSync(file);
            if (stat && stat.isDirectory()) { 
                results = results.concat(walk(file));
            } else { 
                if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                    results.push(file);
                }
            }
        });
    } catch(e) {}
    return results;
}

const targetDir = 'C:\\Users\\karth\\Downloads\\demo1-1\\src';
const files = walk(targetDir);

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('<form') || content.includes('<motion.form')) {
        const selectRegex = /<select[\s\S]*?<\/select>/gi;
        let match;
        
        while ((match = selectRegex.exec(content)) !== null) {
            const selectHtml = match[0];
            const nameMatch = selectHtml.match(/name=["']([^"']+)["']/);
            const name = nameMatch ? nameMatch[1] : null;
            
            // Just print any select that has $ or AED in it
            if (/\$|AED/i.test(selectHtml) && /<option/i.test(selectHtml)) {
                console.log(file, '->', name);
            }
        }
    }
});
