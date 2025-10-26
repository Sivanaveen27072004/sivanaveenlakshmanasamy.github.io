// Fade animation on scroll
const sections = document.querySelectorAll('section');

const appearOptions = {
  threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

sections.forEach(section => {
  section.classList.add('fade');
  appearOnScroll.observe(section);
});

// Resume download instructions:
// 1. Place your resume file inside a folder named "assets" in your project root.
// 2. Rename it as: Siva_Naveen_Resume.pdf
// 3. The download button will automatically fetch that file.

