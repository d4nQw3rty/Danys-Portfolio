const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementsByClassName('close-menu')[0];
function showOverlay() {
  document.getElementById('overlay').style.display = 'block';
}
function hideOverlay() {
  document.getElementById('overlay').style.display = 'none';
}
openMenu.addEventListener('click', showOverlay);
closeMenu.addEventListener('click', hideOverlay);
