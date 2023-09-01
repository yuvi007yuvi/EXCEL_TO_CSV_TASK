// script.js

const excelDataInput = document.getElementById('excelData');
const csvDataOutput = document.getElementById('csvData');
const copyButton = document.getElementById('copyButton');

excelDataInput.addEventListener('input', updateCSV);

copyButton.addEventListener('click', copyToClipboard);

function updateCSV() {
    const excelData = excelDataInput.value;
    const lines = excelData.split('\n');
    const values = [];

    lines.forEach(line => {
        const parts = line.split('\t'); // Assuming tab-separated data
        values.push(parts[0]); // Assuming the data is in the first column
    });

    const csvText = values.join(',');
    csvDataOutput.value = csvText;
}

function copyToClipboard() {
    csvDataOutput.select();
    document.execCommand('copy');
    // Optionally, provide user feedback, e.g., alert('Copied to clipboard!');
}
