document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navBar = document.querySelector('.navBar');
    const barsIcon = document.querySelector('.fa-bars');
    const timesIcon = document.querySelector('.fa-times');
    // const navLinks = document.querySelector('.nav-links');
    // const navItems = document.querySelectorAll('.nav-links a');
    const navItems = document.querySelectorAll('.navBar ul li a');


    menuToggle.addEventListener('click', function() {
        navBar.classList.toggle('active');
        barsIcon.style.display = barsIcon.style.display === 'none' ? 'inline' : 'none';
        timesIcon.style.display = timesIcon.style.display === 'none' ? 'inline' : 'none';
    });

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // navLinks.classList.remove('active');
            navBar.classList.remove('active'); 
            barsIcon.style.display = 'inline';
            timesIcon.style.display = 'none';
        });
    });
});