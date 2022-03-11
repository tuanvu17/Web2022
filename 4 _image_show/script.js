var images = document.querySelectorAll('.image img');
// lay toan bo img trong images
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleyImg = document.querySelector('.gallery__inner img');
var galley = document.querySelector('.gallery');

var currentIndex = 0;

function showGallery (){
    if(currentIndex == 0){
        prev.classList.add('hide');
    }else{
        prev.classList.remove('hide');

    }
    if(currentIndex == images.length - 1){
        next.classList.add('hide');
    }else{
        next.classList.remove('hide');

    }
    // show image
    galleyImg.src = images[currentIndex].src
    galley.classList.add('show');
}

images.forEach((item, index)=>{
        item.addEventListener('click', function(){
            currentIndex = index;
            showGallery()
        })
})

close.addEventListener('click', function(){
    galley.classList.remove('show');
})

document.addEventListener('keydown', function(e){
    if(e.keyCode === 27){
    galley.classList.remove('show');
    }
})

prev.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--;
        showGallery()
    }
})


next.addEventListener('click', function(){
    if(currentIndex < images.length - 1){
        currentIndex++;
        showGallery()
    }
})
