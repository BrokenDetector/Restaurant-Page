function main() {
    const container = document.createElement('div');
    container.setAttribute('class', 'main');

    const title = document.createElement('h1');
    title.textContent = 'About Us';

    const info = document.createElement('p');
    info.setAttribute('class', 'info');
    info.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    container.appendChild(title);
    container.appendChild(info);

    return container;
}

export { main as renderAbout };
