import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the shadows.js file
const shadowsDataPath = path.join(__dirname, '../src/data/shadows.js');
let shadowsCode = fs.readFileSync(shadowsDataPath, 'utf-8');

// Use regex to extract the object properties robustly
const objectPattern = /{([^}]+)}/g;
let match;
let pluginCode = `
import plugin from 'tailwindcss/plugin.js';

export default plugin(function({ addUtilities }) {
  const newUtilities = {
`;

// Extract each shadow object and parse manually
while ((match = objectPattern.exec(shadowsCode)) !== null) {
    const objectString = match[1];

    // Extract className
    const classMatch = objectString.match(/className:\s*["']([^"']+)["']/);
    // Extract css
    const cssMatch = objectString.match(/css:\s*["']([^"']+)["']/);

    if (classMatch && cssMatch) {
        const className = classMatch[1];
        let cssValue = cssMatch[1].replace('box-shadow: ', '').replace(';', '').trim();
        // Also remove any inset replacements from previous css edits
        if (cssValue.startsWith('inset ')) cssValue = cssValue;

        pluginCode += `    '.${className}': { boxShadow: '${cssValue}' },\n`;
    }
}

pluginCode += `  };

  addUtilities(newUtilities, ['responsive', 'hover']);
});
`;

const outputPath = path.join(__dirname, 'index.js');
fs.writeFileSync(outputPath, pluginCode);
console.log('Successfully generated plugin index.js');
