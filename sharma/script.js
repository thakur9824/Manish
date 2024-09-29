script.js
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navUl = document.querySelector('nav ul');

    mobileMenu.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your message has been sent successfully!');
        form.reset();
    });
});
<section id="gallery">
    <h2>Gallery</h2>
    <div class="gallery-grid">
        <img src="image1.jpg" alt="Description 1">
        <img src="image2.jpg" alt="Description 2">
        <img src="image3.jpg" alt="Description 3">
    </div>
</section>
<section id="location">
    <h2>Location</h2>
    <iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450"></iframe>
</section>