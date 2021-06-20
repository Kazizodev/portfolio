const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav li');
    burger.addEventListener('click', () => {
        //toggle Borgar
        nav.classList.toggle('nav-active');
        //Toggle Borgar Open/Close Animation
        burger.classList.toggle('toggle');
        //Enter Animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index / 7 + 0.5) + 's';
            }
        });
        /*//Close Burger on Link Click
        navLinks.forEach(e=>{e.addEventListener('click', () =>{
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        })});*/
    });
}

const app = () => {
    navSlide();
}

app();