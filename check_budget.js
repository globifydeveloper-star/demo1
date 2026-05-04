const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
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
    return results;
}

const files = walk(path.join(__dirname, 'src'));

let problemForms = [];

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    if (content.includes('<form') || content.includes('<motion.form')) {
        const selectRegex = /<select[\s\S]*?<\/select>/gi;
        let match;
        
        while ((match = selectRegex.exec(content)) !== null) {
            const selectHtml = match[0];
            const nameMatch = selectHtml.match(/name=["']([^"']+)["']/);
            const name = nameMatch ? nameMatch[1] : null;
            
            const hasBudgetOptions = /\$|AED|k/i.test(selectHtml) && /<option/i.test(selectHtml);
            
            if (hasBudgetOptions && name !== 'budget' && name !== 'revenue') {
                problemForms.push({
                    file: path.basename(file),
                    name: name,
                    content: selectHtml.substring(0, 150).replace(/\n/g, " ") + "..."
                });
            }
        }
    }
});

console.log("Forms with budget options but wrong name:");
console.log(JSON.stringify(problemForms, null, 2));
