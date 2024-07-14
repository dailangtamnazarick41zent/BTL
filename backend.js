// This is a placeholder for backend operations, such as storing extensions in a database.
// For simplicity, it only contains an array to store extensions and basic functions to add and display them.
let extensionList = [];

function addExtension(name) {
    extensionList.push(name);
    displayExtensions();
}

function displayExtensions() {
    let extensionListElement = document.getElementById('extensionList');
    extensionListElement.innerHTML = '';
    extensionList.forEach(extension => {
        let li = document.createElement('li');
        li.textContent = extension;
        extensionListElement.appendChild(li);
    });
}
