function main() {
    const container = document.createElement('div');
    container.setAttribute('class', 'main');

    const title = document.createElement('h1');
    title.textContent = 'Menu';
    container.appendChild(title);

    container.appendChild(createItem(
        'Pancakes',
        'A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.',
        './img/pancakes.jpg'
    ));

    container.appendChild(createItem(
        'French Toast',
        'Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.',
        './img/frenchToast.jpg'
    ));

    container.appendChild(createItem(
        'Beary Veggie Sandwich',
        'Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.',
        './img/veggieSandwich.jpg'
    ));

    container.appendChild(createItem(
        'BLT',
        'Interested in the Beary Veggie Sandwich but also love bacon? Say no more.',
        './img/blt.jpg'
    ));

    return container;
}

function createItem(name, description, imgsrc) {
    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const title = document.createElement('h3');
    title.textContent = name;

    const desc = document.createElement('p');
    desc.textContent = description;

    const img = document.createElement('img');
    img.src = imgsrc;

    item.appendChild(title);
    item.appendChild(desc);
    item.appendChild(img);

    return item;
}

export { main as renderMenu };
