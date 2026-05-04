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
    if (/name=["']service["']/i.test(content)) {
        console.log('HAS SERVICE:', file);
    }
});
