const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
});
hamburger.addEventListener('click',()=>{
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    scroll_value = window.scrollY;
    if(scroll_value >50){
        header.style.backgroundColor = 'black';
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
})