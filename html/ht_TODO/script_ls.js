let heading = document.createElement('h1')
heading.innerHTML = 'TODO'
heading.className = 'TODO'
let  title = document.createElement('h2')
let form = document.createElement("form")
form.classList = 'form'

let ul = document.createElement("ul")
myStorege = window.localStorage

let lcSt = JSON.parse(localStorage.getItem('myStorege'))
function createTodoApp(name_  ,done_ , id_ ){
    
    mas.push = {nome:name_,done:done_,id:id_}
    for(let i in mas){
        localStorage.setItem('text', JSON.stringify(mas[i]))
        return mas
    }

    
       
}

function createAppTitle(name_title){
    title.textContent = name_title
    title.className = 'title'
    return title
}

function createTodoItemForm() {
    
    let inp = document.createElement("input")
    inp.className = "input"
    let btn = document.createElement("button")
    btn.textContent = "Добавить задачу"

    btn.className = "btn"

 

        // if(inp == ""){
        //     btn.disabled = true
        // }
        // else {
        //     btn.disabled = false
        // }
  

    form.append(inp)
    form.append(btn)
   
        
    return {
        form,
        btn,
        inp
    }
}

function  createTodoItem(name){
    
    let li = document.createElement('li')
    let btns = document.createElement('div')
    li.className = 'li'
    let text = document.createElement('p')
    
    text.textContent = name
    text.className ='text'
    let doneBtn = document.createElement('button')
    let deleteBtn = document.createElement('button')
    doneBtn.textContent = "Сделано"
    
    deleteBtn.textContent = "Удалить"

    btns.className = 'btns'
    btns.append(doneBtn)
    btns.append(deleteBtn)
    let done = false
    
    doneBtn.addEventListener('click', ()=>{
        text.classList.toggle('done')
        
       
        
    })
    deleteBtn.addEventListener('click',()=>{
        li.remove()
        // done = false
    })
    li.append(text)
    li.append(doneBtn)
    li.append(deleteBtn)
    
    
    return {
        li,
        doneBtn,
        deleteBtn,
        done
    }
}



function appSpisok(name_todo){
    document.addEventListener('DOMContentLoaded', function (){
        
        let container = document.getElementById('container')
        
        let TodoItemForm = createTodoItemForm()
        let todoItem = createTodoItem()
        
        container.append(heading)
        container.append(createAppTitle(name_todo))
        
        container.append(TodoItemForm.form)
        form.addEventListener('submit',(a)=>{
            a.preventDefault()
            // if (!TodoItemForm.inp.value) {
            //     return 
            // }
           

            let el = createTodoItem(TodoItemForm.inp.value)
            container.append(ul)
            if(el){
            // let dnf = createAppTitle(TodoItemForm.inp.value)
            
            ul.append(el.li) 
           createTodoApp(TodoItemForm.inp.value,false,TodoItemForm.inp.value)
            
            container.querySelector(".btn").disabled = true
            }
            TodoItemForm.inp.value = ''
           

        })
                      
        // container.querySelector(".btn").disabled = true
        TodoItemForm.inp.addEventListener("input",()=>{
            if (TodoItemForm.inp.value != ''){
                container.querySelector('.btn').disabled = false
                
               
            }
            else{
                container.querySelector(".btn").disabled = true
                
                
            }

           
        })
        
        
    
    })
}
appSpisok('Список 1')
// appSpisok('Список 2')




