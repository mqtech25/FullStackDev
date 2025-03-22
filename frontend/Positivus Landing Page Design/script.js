const menuBar = document.querySelector('.menu_toggle');
const navList = document.querySelector('.nav_list');


menuBar.addEventListener('click',function(e) {
    this.classList.toggle('open')
    navList.classList.toggle('show')
})