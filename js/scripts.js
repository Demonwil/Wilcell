// inicializamos aos libreria
AOS.init();

let menu = document.getElementById('menu');
let menu_bar = document.getElementById('menu-bar');

menu_bar.addEventListener('click', function() {

  menu.classList.toggle('menu-toggle');

})