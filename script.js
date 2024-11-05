// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show "Back to Top" button on scroll
window.onscroll = function() {
    const btn = document.getElementById("back-to-top");
    if (window.scrollY > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Fade-in effect on page load
window.addEventListener('load', () => document.body.classList.add('loaded'));
