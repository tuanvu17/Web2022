var upload = document.querySelector('#mypicture');
var preview = document.querySelector('.preview');
var error = document.querySelector('.error');


upload.addEventListener('change', function (e) {

    var file = upload.files[0]
    console.log('%c [ file ]-9', 'font-size:13px; background:pink; color:#bf2c9f;', file)
    if (!file) return
    if (!file.name.endsWith('.jpg')) {
        error.innerHTML = 'Hinh anh phai thuoc dinh dang jpg';
        return
    } else {
        error.innerHTML = '';

    }
    if (file.size / (1024 * 1024) > 4) {
        error.innerHTML = 'Hinh anh phai < 5Mb ';
        return
    } else {
        error.innerHTML = '';
    }


    var img = document.createElement('img')
    img.src = URL.createObjectURL(file) 
    preview.appendChild(img);

// Base 64
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file);
    fileReader.onloadend = function(e){
        img.src = e.target.result; //tra ve ket qua dang chuoi Base 64
        
        console.log('%c [  ]-36', 'font-size:13px; background:pink; color:#bf2c9f;', img.src)
    }


})