var boxes = document.querySelectorAll('.box');
var targetList  = document.querySelectorAll('.target');
var currentTarget = null;


targetList.forEach(target =>{
    target.addEventListener('dragstart', function(e){
        this.classList.add('dragging');
        currentTarget = this;
    })
    target.addEventListener('dragend', function(e){
        this.classList.remove('dragging')
    })
    
})


boxes.forEach(box=>{
    box.addEventListener('dragover', function(e){
        // dragover ==>> co 1 phan tu la di qua day
        e.preventDefault();
        //  this.appendChild(currentTarget);
    })

    box.addEventListener('drop',function(){
        // drop =>> 1 thang khac di qua va duoc nhay vao no thi no se drop
        if(!box.querySelector('.target')){
            this.appendChild(currentTarget);
        }
    } )
})
//dragover
//drgop