const left= document.querySelector(".left");
const right= document.querySelector(".right");
const slider=document.querySelector(".slider");
const images=document.querySelectorAll(".image")
let slidNumber = 1;
const length=images.length;


const nextSlide = () =>{
    slider.style.transform=`translateX(-${slidNumber*300}px)`;
    slidNumber++;
}
const prevSlide = () =>{
    slider.style.transform=`translateX(-${(slidNumber-1)*300}px)`;
    slidNumber--;

}
const getFirstSlide = () =>
{
    slider.style.transform=`translateX(0px)`;
    slidNumber=1;   
}

const getLastSlide = () =>
{
    
    slider.style.transform=`translateX(-${(length-1)*300}px)`;
    slidNumber=length;
}

right.addEventListener("click",() => {
    slidNumber< images.length? nextSlide():prevSlide();
    // // slider.style.transform=`translateX(-${slidNumber*300}px)`;
    // // slidNumber++;
  // slider.style.transform=`translateX(0px)`;
        // slidNumber=1;
    // }
})
left.addEventListener("click",() =>
{
    slidNumber> 1 ? prevSlide() : getLastSlide();
})
