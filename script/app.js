const getBtnMenu = document.querySelector('.menu_header')
const getMenu = document.querySelector('.header_mobile')

getBtnMenu.onclick = function() {
    getMenu.classList.toggle('show_menu')
    if (getMenu.classList.contains('show_menu')) {
        getBtnMenu.src = 'img/close.svg'   // مسیر عکس بستن
    } 
    else {
        getBtnMenu.src = 'img/menu-symbol-of-three-parallel-lines-svgrepo-com.svg'
    }
}
