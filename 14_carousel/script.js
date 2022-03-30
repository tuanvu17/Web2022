var imgFeature = document.querySelector('.img-feature');
var listImg = document.querySelectorAll('.list-image img');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

var currentIndex = 0;

function updateImageByIndex (index){
    // lay ra ta ca cac anh
    var listImg = document.querySelectorAll('.list-image img');
    // lay ra tat ca cac the div 
    document.querySelectorAll('.list-image div').forEach(item =>{
        // remove class active khoi tat ca cac the
        item.classList.remove('active');
    })
    currentIndex = index;
    imgFeature.src = listImg[index].getAttribute('src');
    // them class active vao the cha cua the img la the div bao quanh
    listImg[index].parentElement.classList.add('active');
}

listImg.forEach((imgElement, index) =>{
    imgElement.addEventListener('click', e=>{
       // updateImageByIndex(index);

        imgFeature.style.opacity = '0'; 
        // dat thuoc tinh opacity ve 0, doi 1 khoang thoi gian thi cho anh hien len 1
        setTimeout(() => {
            updateImageByIndex(index);
            imgFeature.style.opacity = '1';
        }, 400);
    })
})

prevBtn.addEventListener('click', e=>{
    if(currentIndex == 0){
        currentIndex = listImg.length -1;
    }else{
        currentIndex --;
    }
    imgFeature.style.animation = '';
    setTimeout(() => {
        updateImageByIndex(currentIndex);
        imgFeature.style.animation = 'slideLeft 1s ease-in-out forwards';
        // truot tu trai sang
    }, 200);
})

nextBtn.addEventListener('click', e=>{
    if(currentIndex == listImg.length -1){
        currentIndex = 0;
    }else{
        currentIndex ++;
    }
    imgFeature.style.animation = '';
    setTimeout(() => {
        updateImageByIndex(currentIndex);
        imgFeature.style.animation = 'slideRight 1s ease-in-out forwards';
    }, 200);
})
updateImageByIndex(0);




