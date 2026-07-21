const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const backToTop = document.querySelector('.back-to-top');
const form = document.querySelector('.contact-form');
const sections = document.querySelectorAll('main section[id]');
const revealElements = document.querySelectorAll('.reveal');

function closeMenu() {
  if (navLinks && navToggle) {
    navLinks.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  }
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navItems.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

function updateActiveLink() {
  const scrollPosition = window.scrollY + 140;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      navItems.forEach((link) => {
        link.classList.toggle('active-link', link.getAttribute('href') === `#${section.id}`);
      });
    }
  });
}

window.addEventListener('scroll', () => {
  if (backToTop) {
    backToTop.classList.toggle('show', window.scrollY > 650);
  }

  if (navItems.length) {
    updateActiveLink();
  }
});

window.addEventListener('load', updateActiveLink);

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const submitButton = form.querySelector('button');

  if (submitButton) {
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Message Sent';
    submitButton.setAttribute('disabled', 'true');

    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.removeAttribute('disabled');
      form.reset();
    }, 1800);
  }
});
