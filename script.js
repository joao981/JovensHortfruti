const header= document.querySelector("header");
Window.addEventListener ("scroll", function() {
    header.classList,toggle ("sticky", window.scrollY > 100);

});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nevlist.classList.toggle('open');
};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    nevlist.classList.remove('open');
};