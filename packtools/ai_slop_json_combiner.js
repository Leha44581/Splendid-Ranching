// hi deepa here i ai genned this script to combine all json files in a directory into an array in a new file
// this is used for moving data files into a kube script using priority data events for easier management

const fs = require('fs');
const path = require('path');

// Folder where the script is located
const folderPath = __dirname;

// Read all files in the folder
const files = fs.readdirSync(folderPath);

// Filter for .json files (excluding the output file)
const jsonFiles = files.filter(
    file => file.endsWith('.json') && file !== 'output.json'
);

// Parse each JSON file
const outputArray = jsonFiles.map(file => {
    const filePath = path.join(folderPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    try {
        return JSON.parse(fileContent);
    } catch (err) {
        console.error(`❌ Error parsing ${file}:`, err);
        return null;
    }
}).filter(item => item !== null);

// Build JS content
const jsContent =
    `const output = ${JSON.stringify(outputArray, null, 2)};\n`;

// Write to output.js in the same folder
const outputFile = path.join(folderPath, 'combiner_output.js');
fs.writeFileSync(outputFile, jsContent, 'utf8');

console.log(`✅ Created ${outputFile} with ${outputArray.length} JSON entries.`);
