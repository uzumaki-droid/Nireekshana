// script.js
const envelopeWrapper = document.getElementById('envelopeWrapper');
const btn = document.getElementById('openBtn');
const heartsContainer = document.getElementById('hearts-container');

btn.addEventListener('click', () => {
    // 1. Trigger CSS Animation
    envelopeWrapper.classList.add('open');
    
    // 2. Trigger Hearts
    startHeartRain();
});

function startHeartRain() {
    // Create 50 hearts over 2 seconds
    const interval = setInterval(() => {
        createHeart();
    }, 50);

    // Stop creating new hearts after 3 seconds, but existing ones will finish floating
    setTimeout(() => {
        clearInterval(interval);
    }, 3000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤';
    
    // Randomize Position and Size
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    
    // Randomize Animation Speed
    const duration = Math.random() * 3 + 3; // between 3s and 6s
    heart.style.animationDuration = duration + 's';
    
    heartsContainer.appendChild(heart);

    // Remove element after animation finishes
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}