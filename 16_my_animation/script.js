var animationElements = document.querySelectorAll('.show-on-scroll');


function toggleAnimationElementInWindow(element){
// check h1 co nam trong man hinh khong =>> toa do dau 
    // =>>>> top, left, bottom, right : la toa cua box
    var rect = element.getClientRects()[0]; 
    var heightScreen = window.innerHeight;
    // Check khoi box co ben trong man hinh hay khong
    if(!(rect.bottom < 0 || rect.top > heightScreen)){
        //  ben trong
        element.classList.add('start');
    }else{
        // todo ben ngoai
        element.classList.remove('start');
    }
}


function checkAnimation(){
    animationElements.forEach(item =>{
        toggleAnimationElementInWindow(item)
    })
}

window.onscroll = checkAnimation