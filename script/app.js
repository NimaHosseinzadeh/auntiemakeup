const getBtnMenu = document.querySelector('.menu_header')
const getMenu = document.querySelector('.header_mobile')

getBtnMenu.onclick = function() {
    getMenu.classList.toggle('show_menu')
    if (getMenu.classList.contains('show_menu')) {
        getBtnMenu.src = 'img/close.svg'  
    } 
    else {
        getBtnMenu.src = 'img/menu-symbol-of-three-parallel-lines-svgrepo-com.svg'
    }
}


// ----------------------------


// const getSectionBox1 = document.querySelector('.section_5_box_sec1')
// const getSectionBox2 = document.querySelector('.section_5_box_sec2')
// const getSectionBox3 = document.querySelector('.section_5_box_sec3')

// const getBoxShowSection1 = document.querySelector('.show1')
// const getBoxShowSection2 = document.querySelector('.show2')
// const getBoxShowSection3 = document.querySelector('.show3')

// getSectionBox1.onclick = function(){
//     getBoxShowSection1.classList.toggle('in')
// }
// getSectionBox2.onclick = function(){
//     getBoxShowSection2.classList.toggle('in')
// }
// getSectionBox3.onclick = function(){
//     getBoxShowSection3.classList.toggle('in')
// }

const sections = document.querySelectorAll('.section_5_box_sec1, .section_5_box_sec2, .section_5_box_sec3');
const boxes = document.querySelectorAll('.show1, .show2, .show3');

sections.forEach((section, index) => {
    section.onclick = function() {
        boxes[index].classList.toggle('in');
    };
});
