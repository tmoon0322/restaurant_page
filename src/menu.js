import WaffleImage from './butter_waffle.png'
export { buildMenu }


function buildMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''
    const image = document.createElement('img');
    image.alt = 'A picture of a waffle with butter';
    image.src = WaffleImage;
    image.setAttribute('class', 'waffle_img');
    const text = document.createElement('h1');
    text.textContent = 'Butter Waffle!'
    content.appendChild(image);
    content.appendChild(text);
}