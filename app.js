const container = document.querySelector('.container');
// console.log(container);

container.addEventListener('click', () => {
    const newElement = createNewElement('p', 'This is super cool');
    container.appendChild(newElement);
});

function createNewElement(tagName, text) {
    const newElement = document.createElement(tagName);
    newElement.textContent = text;
    return newElement;
}

// A Framework: like a sample library or set of templates!