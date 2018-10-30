setInterval(() => {
  const body = document.getElementById('body').classList;
  const spans = document.getElementsByClassName('dot');
  const id = body[0].substr(body[0].length - 1);
  for (let i = 0; i < spans.length; i++) {
    spans[i].classList.remove('dotActive');
    if(spans[i].getAttribute('data-dot') == id) {
      spans[i].classList.add('dotActive');
    }
  }
}, 700)

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const spinner = document.getElementById('spinner');
    spinner.classList.add('fadeOutSpinner');
    setTimeout(() => {
      spinner.style.display = 'none';
    }, 1000);
  }, 2000);
});

const images = document.getElementsByClassName('galleryImage');
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', (e) => {
    let source = e.target.getAttribute('src');
    openModal(source);
  })
}

const openModal = (source) => {
  const replaced = source.replace('-thumbnail', '');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  modalImg.setAttribute('src', replaced);
  modal.style.display = 'flex';
  modal.addEventListener('click', (e) => {
    if(e.target == modalImg) {
      return;
    } else {
      modal.style.display = 'none';
    }
  })
};