const body = document.querySelector('#body');
const colorName = document.querySelector('.colorName');
const btn = document.querySelector('.btn');

btn.addEventListener('click', generateBackgroundColor);

function generateBackgroundColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = o; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)]
    }
    colorName.innerHTML = hexColor;
    body.style.backgroundColor = hexColor;
}