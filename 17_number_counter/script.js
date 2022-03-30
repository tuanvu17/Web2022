
var count = 0;
// su dung ham bat dong bo
var fb = document.querySelector('.facebook h2');
var yt = document.querySelector('.youtube h2');
var tiktok = document.querySelector('.tiktok h2');
    
function counter(el, to){ 

    let time = 144;
    let step = to/time;
    let count  = 0;
    let counting = setInterval(() => {
        count += step;
        if(count > to){
            clearInterval(counting);
            el.innerText = to;
        }else{
            el.innerText = Math.round(count);
        }
    }, 1);
    
}

counter (fb, 3300);
counter (yt, 2000);
counter (tiktok, 9000);