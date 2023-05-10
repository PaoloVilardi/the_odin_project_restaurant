console.log("HERE WE ARE!");

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}



document.querySelectorAll('.faq-card').forEach(item =>{
  item.addEventListener('click', ()=>{
    let response = item.querySelector('.faq-response');
    let arrow = item.querySelector('.fa-chevron-down');
    response.classList.toggle('show');
    arrow.classList.toggle('arrow');
  })
})

const header = document.querySelector('.header');

document.addEventListener('scroll', function(){
  // Get the scroll position
  let scrollPos = window.pageYOffset;
  
  if ( scrollPos > 100 ) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})