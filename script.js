// Handle scroll event to trigger timeline animations
function handleScroll() {
    const items = document.querySelectorAll('.timeline-item');
    const triggerPoint = window.innerHeight / 1.5; 
  
    items.forEach(item => {
      const itemPosition = item.getBoundingClientRect().top;
  
      if (itemPosition < triggerPoint) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  
  // Initialize scroll listener
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
  


 // Define the color set
const colorSet = [
    "#2C3E50",  // Navy Blue
    "#2ECC71",  // Emerald Green
    "#7F8C8D",  // Slate Gray
    "#34495E",  // Midnight Blue
    "#4B4B4B",  // Charcoal
    "#8E44AD",  // Royal Purple
    "#4682B4",  // Steel Blue
    "#16A085",  // Dark Teal
    "#D5A6BD",  // Warm Taupe
    "#F39C12"   // Gold
  ];
  
  // Function to get a random color, ensuring it's not the same as the previous one
  let previousColor = null; 
  
  function getRandomColor() {
    let randomColor;
    do {
      randomColor = colorSet[Math.floor(Math.random() * colorSet.length)];
    } while (randomColor === previousColor); 
    
    previousColor = randomColor; 
    return randomColor;
  }
  
  // Example usage in your timeline item loop
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach(item => {
    const dateElement = item.querySelector('.date');
    dateElement.style.backgroundColor = getRandomColor();
  });
  
