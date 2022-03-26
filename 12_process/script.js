var range = document.querySelector('.range');
var process = document.querySelector('.process');
var value = document.querySelector('.process span');


function updateProcess (percent){
    process.style.width = `${percent}%`;
    value.innerHTML = `${percent}%`;
}

range.addEventListener('mousemove',function(e){
    var processWidth = e.pageX - this.offsetLeft;
    var percent = Math.round(processWidth / this.offsetWidth * 100);
    updateProcess(percent);
})

var slider = document.querySelector('.slider');

slider.addEventListener('change', function(val){
    console.log('%c [ this.value ]-22', 'font-size:13px; background:pink; color:#bf2c9f;', this.value)
})