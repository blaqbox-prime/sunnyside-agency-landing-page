const menu_toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');

menu_toggle.addEventListener('click', ()=>{
    menu.classList.toggle('open');
});

