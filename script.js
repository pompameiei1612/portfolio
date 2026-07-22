// Scroll Animation

const boxes = document.querySelectorAll('.box');


window.addEventListener('scroll',()=>{

    boxes.forEach(box=>{

        const position = box.getBoundingClientRect().top;

        const screen = window.innerHeight;


        if(position < screen - 100){

            box.style.opacity = "1";
            box.style.transform = "translateY(0)";

        }

    });

});




// Navbar Shadow

window.addEventListener("scroll",()=>{

    const nav = document.querySelector("nav");


    if(window.scrollY > 50){

        nav.style.boxShadow =
        "0 0 25px #d4af37";

    }

    else{

        nav.style.boxShadow =
        "0 0 15px #d4af37";

    }

});
