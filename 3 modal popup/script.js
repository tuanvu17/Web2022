var btnOpen = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var btnClose = document.querySelector('.modal__footer button');

function toggtleModal(){
    modal.classList.toggle('hide');
}
btnOpen.addEventListener('click',toggtleModal);
iconClose.addEventListener('click',toggtleModal);
btnClose.addEventListener('click',toggtleModal);
modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        // an vao cai Modal, bang chinh no
        toggtleModal();
    }
});