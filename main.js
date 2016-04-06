var sideMenuContainer = document.getElementById('side-menu');

document.getElementById('side-menu-dismiss').addEventListener('click', function(){
  toggleSideMenu();
});

document.getElementById('side-menu-opener').addEventListener('click', function(){
  toggleSideMenu();
})

function toggleSideMenu () {
  if(sideMenuContainer.classList.contains('side-menu--opened')){
    sideMenuContainer.classList.remove('side-menu--opened');
  }
  else {
    sideMenuContainer.classList.add('side-menu--opened');
  }
}