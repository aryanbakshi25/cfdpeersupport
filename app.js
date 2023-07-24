window.onload = function () {
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');
  const mobile_nav_links = document.querySelectorAll('.mobile-nav a');

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });

  // Add event listener to each mobile navigation link
  mobile_nav_links.forEach(function (link) {
    link.addEventListener('click', function () {
      // Close the mobile menu
      menu_btn.classList.remove('is-active');
      mobile_menu.classList.remove('is-active');
    });
  });
}
