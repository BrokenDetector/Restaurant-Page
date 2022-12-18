function main() {
    const container = document.createElement('div');
    container.setAttribute('class', 'main');

    const top = document.createElement('h1');
    top.setAttribute('class', 'h1');
    top.textContent = "Bear's Breakfast Bar";

    const dummyContainer = document.createElement('div');
    dummyContainer.setAttribute('class', 'dummyContainer');

    dummyContainer.appendChild(createItem(
        "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    ));

    dummyContainer.appendChild(createItem(
        "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    ));

    dummyContainer.appendChild(createItem(
        "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    ));

    container.appendChild(top);
    container.appendChild(dummyContainer);

    return container;
}

function createItem(text) {
    const desc = document.createElement('p');
    desc.textContent = text;
    return desc;
}

export { main as renderHome };
