const secretCode = 'unicorn';
const pressed = [];

// variables for the viewport size/positioning
const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

console.log(w, h);

// select the body to append images
const mainBody = document.querySelector('body');

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        console.log('Code Activated!');

        const randomY = Math.round(Math.random() * h) + 'px';
        const randomX = Math.round(Math.random() * w) + 'px';

        // variables for the random images/sizes
        const imageSizeW = Math.round(Math.random() * 350) + 50;
        const imageSizeY = Math.round(Math.random() * 350) + 50;

        console.log(randomY, randomX);

        // cornify_add();
        const elem = document.createElement('img');
        elem.setAttribute('src', `https://source.unsplash.com/${imageSizeW}x${imageSizeY}`);
        elem.classList.add('secretImg');
        elem.style.top = randomY;
        elem.style.left = randomX;
        mainBody.appendChild(elem);
    }
    console.log(pressed);
});