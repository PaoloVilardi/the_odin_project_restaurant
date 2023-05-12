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
});

document.querySelectorAll('.photo').forEach(item =>{
  
  item.addEventListener('mousemove', (e) => {
    // const readout = item.querySelector('.readout');
    const { x, y } = item.getBoundingClientRect();
    const itemStyle = window.getComputedStyle(item);
    let itemWidth = parseInt(itemStyle.getPropertyValue('width'));
    let itemHeight = parseInt(itemStyle.getPropertyValue('height'));
    let computedX = Math.max(e.clientX - parseInt(x), 0);
    let computedY = Math.max(e.clientY - parseInt(y), 0);
    if(computedX < itemWidth && computedY < itemHeight){
      item.style.setProperty('--x', computedX);
      item.style.setProperty('--y', computedY);
    }
    // readout.innerText = `
    // mouse X: ${e.clientX} mouse Y: ${e.clientY}
    
    // left edge: ${parseInt(x)} top edge: ${parseInt(y)}
    
    // shiny X: ${e.clientX - parseInt(x)} shiny Y: ${e.clientY - parseInt(y)}
    // `;
  });
  let description = item.querySelector('.photo-description');
  let subTitle = description.querySelector('.photo-subtitle');
  // console.log(subTitle);
  // description.querySelector('.photo-title').addEventListener('mouseover', (e) =>{
  //   subTitle.classList.toggle('visible');
  //   console.log("AAAAAAAAAAAAAAAAAAAAA");
  // });
  item.addEventListener('mouseenter', (e)=>{
    subTitle.classList.toggle('visible');
    console.log("AAAAAAAAAAAAAAAAAAAAA");
  });
  item.addEventListener('mouseleave', (e)=>{
    subTitle.classList.toggle('visible');
    console.log("AAAAAAAAAAAAAAAAAAAAA");
  })
});

const photoList = document.querySelector('.photo-card-list');
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const photo = photoList.querySelector('.photo');

// photoList.addEventListener("wheel", (e)=>{
//   e.preventDefault();
//   photoList.scrollLeft += e.deltaY;
// });

nextBtn.addEventListener('click', ()=>{
  photoList.style.scrollBehavior = "smooth";
  photoList.scrollLeft += photo.offsetWidth;
});
backBtn.addEventListener('click', ()=>{
  photoList.style.scrollBehavior = "smooth";
  photoList.scrollLeft -= photo.offsetWidth;
});

