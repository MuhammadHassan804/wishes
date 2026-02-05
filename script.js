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

// Luxury Clock Functionality
function updateLuxuryClock() {
  const now = new Date();
  
  // Get time components
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 to 12
  
  // Format with leading zeros
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  
  // Update DOM elements
  const hourElement = document.getElementById('lux-hour');
  const minuteElement = document.getElementById('lux-minute');
  const ampmElement = document.getElementById('lux-ampm');
  
  if (hourElement) hourElement.textContent = formattedHours;
  if (minuteElement) minuteElement.textContent = formattedMinutes;
  if (ampmElement) ampmElement.textContent = ampm;
}

// Update clock immediately and then every minute
updateLuxuryClock();
setInterval(updateLuxuryClock, 60000); // Update every minute

// Mouse tracking for interactive glow effect
const dateCard = document.querySelector('.date-card');
if (dateCard) {
  dateCard.addEventListener('mousemove', (e) => {
    const rect = dateCard.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    dateCard.style.setProperty('--mouse-x', `${x}%`);
    dateCard.style.setProperty('--mouse-y', `${y}%`);
  });
  
  // Reset position when mouse leaves
  dateCard.addEventListener('mouseleave', () => {
    dateCard.style.setProperty('--mouse-x', '50%');
    dateCard.style.setProperty('--mouse-y', '50%');
  });
}

// Animate time digits on update
function animateDigit(element, newValue) {
  if (!element || element.textContent === newValue) return;
  
  element.style.opacity = '0.5';
  element.style.transform = 'translateY(5px)';
  
  setTimeout(() => {
    element.textContent = newValue;
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, 150);
}

// Enhanced update with animation
function updateClockWithAnimation() {
  const now = new Date();
  
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12;
  
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  
  const hourElement = document.getElementById('lux-hour');
  const minuteElement = document.getElementById('lux-minute');
  const ampmElement = document.getElementById('lux-ampm');
  
  if (hourElement && hourElement.textContent !== formattedHours) {
    animateDigit(hourElement, formattedHours);
  }
  
  if (minuteElement && minuteElement.textContent !== formattedMinutes) {
    animateDigit(minuteElement, formattedMinutes);
  }
  
  if (ampmElement && ampmElement.textContent !== ampm) {
    ampmElement.style.opacity = '0.5';
    setTimeout(() => {
      ampmElement.textContent = ampm;
      ampmElement.style.opacity = '1';
    }, 150);
  }
}

// Use animated version if preferred
setInterval(updateClockWithAnimation, 1000);

