const glowContainer = document.getElementById('glow-container');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    glowContainer.style.top = `${mouseY}px`;
    glowContainer.style.left = `${mouseX}px`; //apply the style on the div
    
});