import '../imageSlider.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

const imgArr = [img1, img2, img3];
let slideIndex = 1; // global variable to control which slide am on
showSlides(slideIndex); // start the slideshow from 1st image

// changes the slide to the next one every 3s
setInterval(()=>plusSlides(1),3000);

/* start of event listeners */
// adding dots eventlistener
const dots = document.getElementsByClassName('dot');
Object.values(dots).forEach((element,index)=>{
    element.addEventListener('click',currentSlide(slideIndex=index+1));
});

// adding next/prev listeners
const prev=document.getElementsByClassName('prev');
prev[0].addEventListener('click',()=>plusSlides(-1));
const next=document.getElementsByClassName('next');
next[0].addEventListener('click',()=>plusSlides(1));

/* end of even listeners */

// adding images to the slideshow
const slideshow = document.getElementsByClassName('slideshow');
Object.values(slideshow).forEach((element, index) => {
    element.setAttribute('src', imgArr[index]);
});

// show image
function showSlides(n) {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // sets all slide to not display
    Object.values(slides).forEach((element, index) => {
        element.style.display = "none";
    })

    // all dots are not active
    Object.values(dots).forEach((element, index) => {
        element.className = element.className.replace("active", "");
    })

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.display = "active";
}

// auto change

// next/prev control
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// dot control
function currentSlide(n) {
    showSlides(n);
}
