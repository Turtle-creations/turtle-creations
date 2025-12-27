const comics = ["images/comic1.jpg","images/comic2.jpg"];
let index = 0;
const slide = document.getElementById("comicSlide");

function nextSlide(){
index=(index+1)%comics.length;
slide.src=comics[index];
}

function prevSlide(){
index=(index-1+comics.length)%comics.length;
slide.src=comics[index];
}

// Mobile swipe
let startX=0;
slide.addEventListener("touchstart",e=>startX=e.touches[0].clientX);
slide.addEventListener("touchend",e=>{
let endX=e.changedTouches[0].clientX;
if(startX-endX>50) nextSlide();
if(endX-startX>50) prevSlide();
});
