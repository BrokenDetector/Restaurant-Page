import { renderAbout } from './About.js';
import { renderHome } from './Home.js';
import { renderMenu } from './Menu.js';

const content = document.querySelector('.content');

function ui() {
    const ui = document.createElement('ui');
    ui.setAttribute('class', 'ui');

    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');

    li1.setAttribute('class', 'li selected');
    li2.setAttribute('class', 'li');
    li3.setAttribute('class', 'li');

    li1.textContent = 'Home';
    li2.textContent = 'Menu';
    li3.textContent = 'About';

    ui.appendChild(li1);
    ui.appendChild(li2);
    ui.appendChild(li3);

    return ui;
}

function footer() {
    const footer = document.createElement('div');
    footer.setAttribute('class', 'footer');

    const text = document.createElement('p');
    text.innerHTML = 'Made by <a href="https://github.com/BrokenDetector">BrokenDetector</a>';
    const img = document.createElement('img');
    img.src = './img/GitHubLogo.png';

    footer.appendChild(text);
    footer.appendChild(img);

    return footer;
}

content.appendChild(ui());
content.appendChild(renderHome());

const navbar = document.querySelectorAll('.li');
navbar.forEach(e => {

    e.addEventListener('click', (el) => {
        const toRemove = document.querySelector('.main');

        if (el.target.textContent == 'Home') {
            toRemove.remove()
            content.appendChild(renderHome())
        }

        else if (el.target.textContent == 'Menu') {
            toRemove.remove();
            content.appendChild(renderMenu());
        }

        else if (el.target.textContent == 'About') {
            toRemove.remove();
            content.appendChild(renderAbout());
        }

        navbar.forEach(e => { e.setAttribute('class', 'li') });
        el.target.setAttribute('class', 'li selected');
    })
})
document.body.appendChild(footer());