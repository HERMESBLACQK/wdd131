document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.logo');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
        logo.classList.toggle('hidden');
    });

    const currentYearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    if (currentYearSpan) {
        currentYearSpan.textContent = currentYear;
        console.log(`Current Year: ${currentYear}`);
    } else {
        console.error('Element with id "currentYear" not found.');
    }

    const modifySpan = document.getElementById('modify');
    const lastModified = new Date(document.lastModified);
    const formattedLastModified = lastModified.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    if (modifySpan) {
        modifySpan.textContent = formattedLastModified;
        console.log(`Last Modified: ${formattedLastModified}`);
    } else {
        console.error('Element with id "modify" not found.');
    }
});
