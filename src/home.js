import waffleImage from './waffle.png'
export { buildHome }


function buildHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''
    const image = document.createElement('img');
    image.alt = 'A picture of a regular waffle';
    image.src = waffleImage;
    image.setAttribute('class', 'waffle_img');
    const text = document.createElement('h1');
    text.textContent = 'Regular Waffle!'
    content.appendChild(image);
    content.appendChild(text);
}