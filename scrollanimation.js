/***********************************************************************
 * Handle scroll event to trigger timeline animations
 ***********************************************************************/
function handleScroll() {
  const items = document.querySelectorAll('.timeline-item');
  const triggerPoint = window.innerHeight / 1;  

  items.forEach(item => {
    if (item.classList.contains('no-scroll-animation')) {
      item.classList.add('active');
      return; 
    }

    const itemPosition = item.getBoundingClientRect().top;

    if (itemPosition < triggerPoint) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

handleScroll();

/***********************************************************************
 * Navbar smooth scroll behavior
 ***********************************************************************/
const navLinks = document.querySelectorAll('.navbar-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    const targetSection = document.querySelector(this.getAttribute('href'));
    
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
