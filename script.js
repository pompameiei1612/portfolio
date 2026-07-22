/* ===========================
LOADER
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    },1200);

});

/* ===========================
CUSTOM CURSOR
=========================== */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX+"px";

    cursor.style.top = e.clientY+"px";

});

/* ===========================
SCROLL PROGRESS
=========================== */

const progress = document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

let scroll = document.documentElement.scrollTop;

let height = document.documentElement.scrollHeight-document.documentElement.clientHeight;

let percent = (scroll/height)*100;

progress.style.width = percent+"%";

});

/* ===========================
SCROLL REVEAL
=========================== */

const reveals = document.querySelectorAll("section");

function reveal(){

reveals.forEach(sec=>{

const top = sec.getBoundingClientRect().top;

const height = window.innerHeight;

if(top < height-120){

sec.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/* ===========================
COUNTER
=========================== */

const counters=document.querySelectorAll(".count");

const speed=150;

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

const update=()=>{

const current=+counter.innerText;

const inc=Math.ceil(target/speed);

if(current<target){

counter.innerText=current+inc;

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(c=>observer.observe(c));

/* ===========================
SCROLL TO TOP
=========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ===========================
DARK MODE
=========================== */

const theme=document.getElementById("theme-toggle");

theme.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

theme.innerHTML="☀️";

}else{

theme.innerHTML="🌙";

}

});
/* ===========================
LIGHTBOX
=========================== */

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", e => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});

/* ===========================
NAVBAR EFFECT
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(255,255,255,.75)";
        header.style.boxShadow="0 8px 30px rgba(0,0,0,.08)";

    }else{

        header.style.background="rgba(255,255,255,.2)";
        header.style.boxShadow="none";

    }

});

/* ===========================
PARALLAX
=========================== */

const hero=document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

hero.style.transform=`translate(${x}px,${y}px)`;

});

/* ===========================
ACTIVE MENU
=========================== */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.offsetHeight;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ===========================
RIPPLE BUTTON
=========================== */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";
circle.style.height=size+"px";

circle.style.left=e.offsetX-size/2+"px";
circle.style.top=e.offsetY-size/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/* ===========================
TYPING EFFECT
=========================== */

const typing=document.querySelector(".hero-text h3");

if(typing){

const text=typing.innerText;

typing.innerHTML="";

let i=0;

function type(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(type,80);

}

}

type();

}

/* ===========================
EASTER EGG
=========================== */

let keys=[];

const secret=[
"ArrowUp",
"ArrowUp",
"ArrowDown",
"ArrowDown",
"ArrowLeft",
"ArrowRight",
"ArrowLeft",
"ArrowRight"
];

document.addEventListener("keydown",e=>{

keys.push(e.key);

keys=keys.slice(-secret.length);

if(JSON.stringify(keys)==JSON.stringify(secret)){

alert("🎉 Welcome to my Portfolio!");

document.body.style.animation="rainbow 2s";

setTimeout(()=>{

document.body.style.animation="";

},2000);

}

});

/* ===========================
FLOATING ELEMENTS
=========================== */

document.querySelectorAll(".floating").forEach((item,index)=>{

setInterval(()=>{

item.style.transform=`translateY(${Math.sin(Date.now()/1000+index)*20}px)`;

},40);

});

/* ===========================
CONSOLE MESSAGE
=========================== */

console.log("%cPortfolio by Marisa","font-size:24px;color:#8fd98f;font-weight:bold;");
console.log("%cDesigned with ❤️","font-size:16px;color:#D4AF37;");
