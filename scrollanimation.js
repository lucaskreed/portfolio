document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-links a');
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarLinks = document.getElementById('navbar-links');

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
      const href = this.getAttribute('href');
      if (!href.startsWith("#")) return;

      event.preventDefault();
      const targetSection = document.querySelector(href);
      const offset = parseInt(this.getAttribute('data-offset') || 0);
      if (targetSection) {
        smoothScroll(targetSection, 800, offset);
        navbarLinks.classList.remove('active');
      }
    });
  });

  navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });

  function handleScroll() {
    const items = document.querySelectorAll('.timeline-item');
    const triggerPoint = window.innerHeight * 0.9;

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

  function copyToClipboard(contactId) {
    const textToCopy = document.getElementById(contactId).textContent.trim();
    const feedbackElement = document.getElementById(contactId + '-feedback');

    navigator.clipboard.writeText(textToCopy).then(() => {
      showFeedback(feedbackElement, "Copy Successful!", "success");
    }).catch(() => {
      showFeedback(feedbackElement, "Copy Failed!", "error");
    });
  }

  function showFeedback(feedbackElement, message, status) {
    feedbackElement.textContent = message;
    feedbackElement.classList.remove('success', 'error');
    feedbackElement.classList.add(status);
    feedbackElement.style.display = 'block';
    setTimeout(() => {
      feedbackElement.style.display = 'none';
    }, 500);
  }

  document.getElementById('toggle-btn').addEventListener('click', function() {
    var recentAchievements = document.getElementById('recent-achievements');
    var oldAchievements = document.getElementById('old-achievements');
    var header = document.getElementById('achievements-header');
    var button = document.getElementById('toggle-btn');

    if (recentAchievements.style.display === "none") {
      recentAchievements.style.display = "block";
      oldAchievements.style.display = "none";
      header.textContent = "Recent Achievements";
      button.textContent = "View Older Achievements";
    } else {
      recentAchievements.style.display = "none";
      oldAchievements.style.display = "block";
      header.textContent = "Old Achievements";
      button.textContent = "View Recent Achievements";
    }
  });
});
