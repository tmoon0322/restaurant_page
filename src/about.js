import WaffleImage from './berry_waffle.png'
export { buildAbout }


function buildAbout() {
    const content = document.getElementById('content');
    content.innerHTML = ''
    const image = document.createElement('img');
    image.alt = 'A picture of a waffle with berries';
    image.src = WaffleImage;
    image.setAttribute('class', 'waffle_img');
    const text = document.createElement('h1');
    text.textContent = 'Berry Waffle!'
    content.appendChild(image);
    content.appendChild(text);
}