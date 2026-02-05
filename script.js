// Optional typewriter effect for h1
document.addEventListener('DOMContentLoaded', function() {
  const h1 = document.querySelector('.text h1');
  if (h1) {
    const text = h1.textContent;
    h1.textContent = '';
    let i = 0;
    
    function typeWriter() {
      if (i < text.length) {
        h1.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    
    // Start typewriter after initial animation
    setTimeout(typeWriter, 800);
  }
});
