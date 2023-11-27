

const colorBtn = document.querySelector('.ester-egg');
const colorSwitch = document.querySelector('.ester-egg div');
let isChangingColor = false;
let colorChangeInterval; 

colorBtn.addEventListener('click', function () {
    colorBtn.style.opacity = 1;
    const titleElements = document.querySelectorAll('p, h1, h2, h3, a, span');

    const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];

    function getRandomColorIndex() {
        return Math.floor(Math.random() * rainbowColors.length);
    }

    function applyRandomColor() {
        titleElements.forEach(element => {
            const randomColorIndex = getRandomColorIndex();
            element.style.color = rainbowColors[randomColorIndex];
            element.style.transition = 'color 0.2s ease-in-out';
        });
    }

    if (!isChangingColor) {
        colorChangeInterval = setInterval(applyRandomColor, 200);
        isChangingColor = true;
        colorSwitch.style.transform = 'translateX(220%)';
    } else {
        clearInterval(colorChangeInterval);
        isChangingColor = false;
        colorSwitch.style.transform = 'translateX(0)';
    }
});