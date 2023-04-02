const hamburger = document.querySelector('.hamburger'); 
const nav = document.querySelector('#nav');
// dokument gör så att koden kollar genom det dokument jag är inne i just när den körs
// querySelector gör så att jag letar efter elementet genom hela dokumentet jag är inne i just då och väljer det som passar i parantesen
// skapar två konstanter utifrån klassen hamburger och id:t nav

hamburger.addEventListener('click', () => {
  // kollar den efter eventet click på hamburgare
  hamburger.classList.toggle('is-active')
  nav.classList.toggle('is-active')
  // lägger till klassen .is-active om de inte har den och tar bort den om de har den
});