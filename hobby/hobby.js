// JavaScript for hiding/showing sections
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.style.display = 'none';
});

document.getElementById('what').style.display = 'block';

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('href').substring(1);
        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(targetId).style.display = 'block';
    });
});
