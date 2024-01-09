
const menuIcon = document.querySelector('.header__menu-icon');
if(menuIcon){
    const headerMenu = document.querySelector('.header__menu');
    const textLogo = document.querySelector('.header__text-of-logo');
    const buttonBorder = document.querySelector('.button-border');
    menuIcon.addEventListener("click", function (e){
        // document.body.classList.toggle('_lock');
        headerMenu.classList.toggle('_active');
        menuIcon.classList.toggle('_active');
        textLogo.classList.toggle('_active');
        buttonBorder.classList.toggle('_active');
    });
}




// -------------------------------------------------------//
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const slides = document.querySelectorAll('.item-plan');



let index = 0;

const nextSlide = ()=>{
    if (index==slides.length-1)
    {
        index=0;
    }
    else{
        index++;
        
    }
    ActiveSlide(index);
    
    
}

const prevSlide = ()=>{
    if (index==0)
    {
        index=slides.length-1;
    }
    else{
        index--;
        
    }
    ActiveSlide(index);   
    
}
const ActiveSlide = n =>{

    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove('_current');
    }


    slides[n].classList.add('_current'); 
    

}

//////////-----------------------------------------/////////////////

index=0;


ActiveSlide;
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

const arrowBtn = document.querySelectorAll('.reviews__btn');
const blockItem = document.querySelectorAll('.block-rev');
const blockItem1 = document.querySelector('.reviews__content');


// const choiceBlock = a =>{
    
//     for(let i=0; i<blockItem.length; i++){

//         blockItem[i].classList.remove('active');
//     }           
//     console.log(a);
//     blockItem[a].classList.add("active"); 
    
// }


// const sop = () =>{
//     for(let i=0; i<blockItem.length; i++){        
//         blockItem[i].addEventListener("click", choiceBlock(i));
//     }
// }

// window.addEventListener("load", sop);



arrowBtn.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        console.log(btn.id);
    }       
    )

})


const nSlide = ()=>{
    if (index==blockItem.length-1)
    {
        //index=0;
    }
    
    else{
        index++;
        
    }
   
    ASlide(index);
    
    
}

const pSlide = ()=>{
    if (index==0)
    {
        //index=blockItem.length-1;
    }
    else{
        index--;
        
    }
    
    ASlide(index);   
    
}







const ASlide = n =>{

    if (n==0)
    {
        arrowBtn[0].classList.add("non-active");
    }else{
        arrowBtn[0].classList.remove("non-active");
    }

    if (n==blockItem.length-1)
    {
        arrowBtn[1].classList.add("non-active");
    }
    else{
        arrowBtn[1].classList.remove("non-active");
    }



    // for(let i=0; i<blockItem.length; i++){
    //     blockItem[i].classList.remove('active');
    // }


    // blockItem[n].classList.add('active'); 
    
}


ASlide;

const initSlider = () =>{
    
    arrowBtn.forEach(btn =>{
        btn.addEventListener("click", () =>{
            const direction = btn.id === "left" ? -0.3 : 0.3;
            const scrollAmount = blockItem1.clientWidth * direction;
            blockItem1.scrollBy({left:scrollAmount, behavior:"smooth"});
        });      
        
        
        
            
        // if (btn.id=="left"){
        //     btn.addEventListener("click", pSlide);
        // }
        // if (btn.id=="right"){
        //     btn.addEventListener("click", nSlide);
        // }
          
  
    })
}

// const handleSlideButtons = () =>{
//     if (index==blockItem.length){
//         arrowBtn[1].classList.add('non-active')
//     }
    
// }

//window.addEventListener("load", handleSlideButtons)

let isDragging = false, startX, startScrollLeft;
const dragStart = (e) =>{
    isDragging = true;
    blockItem1.classList.add("dragging");
    startX=e.pageX;
    startScrollLeft = blockItem1.scrollLeft;
}
const dragging = (e) =>{
    if(!isDragging) return;
    blockItem1.scrollLeft = startScrollLeft - (e.pageX-startX);
}
const dragStop = () =>{
    isDragging = false;
    blockItem1.classList.remove("dragging");
}

blockItem1.addEventListener("mousedown", dragStart);
blockItem1.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

window.addEventListener("load", initSlider)




 