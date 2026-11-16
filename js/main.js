// Opens and closes the menu on phones.
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.menu-toggle');
  if (!nav || !toggle) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
