document.addEventListener('DOMContentLoaded', () => {
    // Get the current year and set it to the span with id 'currentYear'
    const currentYearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    if (currentYearSpan) {
        currentYearSpan.textContent = currentYear;
        console.log(`Current Year: ${currentYear}`);
    } else {
        console.error('Element with id "currentYear" not found.');
    }

    // Get the last modification date and set it to the span with id 'modify'
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
