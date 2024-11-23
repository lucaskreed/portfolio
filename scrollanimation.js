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
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-links a');

  function smoothScroll(target, duration, offset = 0) {
    const startPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);

      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      
      console.log(`Navigating to: ${this.getAttribute('href')}, Offset: ${this.getAttribute('data-offset')}`);
      
      const offset = parseInt(this.getAttribute('data-offset') || 0);

      if (targetSection) {
        smoothScroll(targetSection, 800, offset);
      } else {
        console.log("Target section not found.");
      }
    });
  });
});
