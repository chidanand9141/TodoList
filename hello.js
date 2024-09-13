function addParagraph() {
    // Create a new paragraph element
    var newParagraph = document.createElement('p');
    // Create a text node with the content to be added
    var text = document.createTextNode('This is a new paragraph added using appendChild.');

    // Append the text node to the new paragraph element
    newParagraph.appendChild(text);

    // Get the parent div element
    var parentDiv = document.getElementById('parentDiv');

    // Append the new paragraph to the parent div
    parentDiv.appendChild(newParagraph);
}

// const h1 = document.createElement('h1');

// var text1 = document.createTextNode('Hi..........Javascript')

// h1.appendChild(text1);

// parentDiv.appendChild(h1);