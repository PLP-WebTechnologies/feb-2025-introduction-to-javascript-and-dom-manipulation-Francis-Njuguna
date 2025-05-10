// Function to change text content
function changeText() {
    const text = document.getElementById('dynamicText');
    const messages = [
        '🎉 Text successfully changed!',
        '✨ Look at this dynamic content!',
        '🚀 JavaScript is awesome!',
        '💫 DOM manipulation in action!'
    ];
    text.textContent = messages[Math.floor(Math.random() * messages.length)];
    text.style.color = '#4f46e5';
}

// Function to modify CSS styles
function changeStyle() {
    const element = document.getElementById('styleText');
    element.classList.toggle('highlight');
    if (element.classList.contains('highlight')) {
        element.textContent = '🌟 Style has been highlighted!';
    } else {
        element.textContent = 'Click to toggle highlight effect on this text.';
    }
}

// Function to add/remove elements
function toggleElement() {
    const container = document.getElementById('elementContainer');
    const existingElement = container.querySelector('.dynamic-element');
    
    if (existingElement) {
        existingElement.style.opacity = '0';
        setTimeout(() => container.removeChild(existingElement), 300);
    } else {
        const newElement = document.createElement('p');
        newElement.textContent = '✨ New interactive element added!';
        newElement.className = 'dynamic-element';
        newElement.style.opacity = '0';
        container.appendChild(newElement);
        setTimeout(() => newElement.style.opacity = '1', 10);
    }
}