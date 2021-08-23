'use strict';

const password = document.getElementById('password');
const generateBtn = document.getElementById('generate-btn');

function app() {
    let string = '0123456789abcdef';
    generateBtn.addEventListener('click', () => {
        let generated = '';
        for (let i = 0; i < 10; i++) {
            generated += string.charAt(Math.floor(Math.random() * string.length));
        };
        password.textContent = generated;
    })
}
app()