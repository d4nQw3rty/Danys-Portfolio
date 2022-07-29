const openMenu = document.getElementsById('openMenu');
const closeMenu = document.getElementsByClassName('closeMenu');
function showOverlay() {
  document.getElementById('overlay').style.display = 'block';
}
function hideOverlay() {
  document.getElementById('overlay').style.display = 'none';
}
openMenu.addEventListener('click', showOverlay);
closeMenu.addEventListener('click', hideOverlay);
