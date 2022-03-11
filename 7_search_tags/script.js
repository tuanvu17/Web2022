var content = document.querySelector('.content');
var input = document.querySelector('.content input');
var btnRemoveALl = document.querySelector('.remove-all');

var tags = ['Nodejs', 'Reactjs']

function render (){
    content.innerHTML='';
    for (let index = 0; index < tags.length; index++) {
        const tag = tags[index];
        content.innerHTML += `<li>
        ${tag}
        <i class="fas fa-times" onclick = "removeTag(${index})" ></i>
    </li>`
    }
    content.appendChild(input);
    input.focus();
}

function addTag(val){
    tags.push(val)
}

function removeTag (index){
    console.log('%c [ index ]-33', 'font-size:13px; background:pink; color:#bf2c9f;', index)
    tags.splice(index,1)
    render()
}

render()

input.addEventListener('keydown',function(e){
    if(e.key == 'Enter'){
        addTag(input.value.trim());
        input.value ="";
        render();
    }
})

btnRemoveALl.addEventListener('click',function(){
    tags = [];
    render()
})