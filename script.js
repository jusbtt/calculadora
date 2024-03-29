let output = document.getElementById('output');
let currentTheme = 'light';

function appendToOutput(value) {
    if (output.innerText === '0') {
        output.innerText = value;
    } else {
        output.innerText += value;
    }
}

function clearOutput() {
    output.innerText = '0';
}

function calculate() {
    try {
        output.innerText = eval(output.innerText);
    } catch (error) {
        output.innerText = 'Error';
    }
}

function toggleTheme() {
    const body = document.body;
    if (currentTheme === 'light') {
        body.classList.add('dark-theme');
        currentTheme = 'dark';
    } else {
        body.classList.remove('dark-theme');
        currentTheme = 'light';
    }
}
