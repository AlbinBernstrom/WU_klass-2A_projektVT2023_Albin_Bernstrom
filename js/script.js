const hamburger = document.querySelector('.hamburger');
const topBar = document.querySelector('.top');
const middleBar = document.querySelector('.middle');
const bottomBar = document.querySelector('.bottom');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  
  // if (hamburger.classList.contains('is-active')) {
  //   topBar.style.transform = 'rotate(45deg)';
  //   middleBar.style.opacity = 0;
  //   bottomBar.style.transform = 'rotate(-45deg)';
  // } else {
  //   topBar.style.transform = 'rotate(0)';
  //   middleBar.style.opacity = 1;
  //   bottomBar.style.transform = 'rotate(0)';
  // }
});
