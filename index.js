let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}



// animated background
function createBox(){
    let span = document.createElement('span');

    span.classList.add('animated-box');

    let size = Math.random() * 80;

    span.style.height = 40 + size + 'px';
    span.style.width = 40 + size + 'px';

    span.style.top = Math.random() * innerHeight + 'px';
    span.style.left = Math.random() * innerWidth + 'px';

    document.querySelector('.gradient-background').appendChild(span);

    setTimeout(() =>{
        span.remove();
    },3000)

}
 setInterval(createBox, 400);





// for Slides
let slides = document.querySelectorAll('.reviews .row1 .slides-container .slide');
let index = 0;

function next (){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev (){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

//  for typedJS

let typingText = new Typed ("#text", {
    strings: ['WEB DEVELOPER','WEB APP DESIGNER'],
    typeSpeed: 35,
    startDelay:500,
    backSpeed: 35,
    backDelay: 1000,
    loop: true,
    showCursor:true
});