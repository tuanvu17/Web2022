var input = document.querySelector('input');
var button = document.querySelector('button');
var form = document.querySelector('form');
var todos = document.querySelector('.todos');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let val = input.value.trim();
    console.log('%c [ val ]-10', 'font-size:13px; background:pink; color:#bf2c9f;', val)
    if(val) {
        addTodoElement({
            text:val,
        })
        saveTodoList()
    }
    
    input.value = '';
    input.focus()
})
//add tung item vao list
function addTodoElement(todo){

    var li = document.createElement('li'); //Tao ra 1 dom element + them 1 template
    li.innerHTML = `<span>${todo.text}</span> 
    <i class='far fa-trash-alt'></i>`

    if(todo.status === 'completed'){
        li.setAttribute('class', 'completed'); 
    }

    li.addEventListener('click', function(){
        this.classList.toggle('completed')
        saveTodoList()
    })
    li.querySelector('i').addEventListener('click', function(){
        this.parentElement.remove();
        saveTodoList()
    })
    todos.appendChild(li)
}

//moi lan add thi 1 lan save all vao local
function saveTodoList(){
    let todoList = document.querySelectorAll('li');
    let todoStorage = [];
    todoList.forEach(function(item){
        let text = item.querySelector('span').innerText;
        let status  = item.getAttribute('class')

        todoStorage.push({
            text,
            status
        })

    });
    localStorage.setItem('todoList', JSON.stringify(todoStorage));
console.log('%c [ todos ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', JSON.parse(localStorage.getItem('todoList')))
    
}

function init(){
    let data = JSON.parse(localStorage.getItem('todoList'));
    data.forEach(function(item){
        addTodoElement(item)
    })
}
init()