const body = document.body

const iron_bars = document.querySelector('.fa-bars')
const bt_scroll = document.querySelector('.arrow-scroll')
const navigation = document.querySelector('.nav-list')


const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");


const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;


function type() {
    let textArray;
    if (localStorage.getItem("lan") === "spanish") {
        textArray = ["Hola", "Soy Alejandro Griffith", "Soy un Estudiante"];
        console.log("spanish")
    } else {
        textArray = ["Hello", "I'm Alejandro Griffith", "I'm a Student"];
        console.log("eng")
    }
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    let textArray;
    if (localStorage.getItem("lan") === "spanish") {
        textArray = ["Hola", "Soy Alejandro Griffith", "Soy un Estudiante"];
        console.log("spanish")
    } else {
        textArray = ["Hello", "I'm Alejandro Griffith", "I'm a Student"];
        console.log("eng")
    }
    if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let textArray;
    if (localStorage.getItem("lan") === "spanish") {
        textArray = ["Hola", "Soy Alejandro Griffith", "Soy un Estudiante"];
        console.log("spanish")
    } else {
        textArray = ["Hello", "I'm Alejandro Griffith", "I'm a Student"];
        console.log("eng")
    }
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

const arrowScroll = () => {

    if (body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        bt_scroll.style.display = 'block'
    } else {
        bt_scroll.style.display = 'none'
    }
}

document.addEventListener('scroll', arrowScroll)


const selection_device = () => {

    if (!iron_bars.classList.contains('fa-bars')) {
        iron_bars.classList.remove('fa-times')
        iron_bars.classList.add('fa-bars')
        navigation.classList.remove('display-nav-list')
    } else {
        iron_bars.classList.remove('fa-bars')
        iron_bars.classList.add('fa-times')
        navigation.classList.add('display-nav-list')
    }
}

iron_bars.addEventListener('click', selection_device)