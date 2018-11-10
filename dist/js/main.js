'use strict';

setInterval(function () {
  var body = document.getElementById('body').classList;
  var spans = document.getElementsByClassName('dot');
  var id = body[0].substr(body[0].length - 1);
  for (var i = 0; i < spans.length; i++) {
    spans[i].classList.remove('dotActive');
    if (spans[i].getAttribute('data-dot') == id) {
      spans[i].classList.add('dotActive');
    }
  }
}, 700);

window.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var spinner = document.getElementById('spinner');
    spinner.classList.add('fadeOutSpinner');
    setTimeout(function () {
      spinner.style.display = 'none';
    }, 1000);
  }, 2000);
});

var images = document.getElementsByClassName('galleryImage');
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function (e) {
    var source = e.target.getAttribute('src');
    openModal(source);
  });
}

var openModal = function openModal(source) {
  if (window.innerWidth >= 1280) {
    var replaced = source.replace('-thumbnail', '');
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modalImg');
    modalImg.setAttribute('src', replaced);
    modal.style.display = 'flex';
    modal.addEventListener('click', function (e) {
      if (e.target == modalImg) {
        return;
      } else {
        modal.style.display = 'none';
      }
    });
  }
};
