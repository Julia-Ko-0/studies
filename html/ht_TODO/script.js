let heading = document.createElement('h1')
heading.innerHTML = 'TODO'
heading.className = 'TODO'
let  title = document.createElement('h2')
let form = document.createElement("form")
form.classList = 'form'

let ul = document.createElement("ul")


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

    
    doneBtn.addEventListener('click', ()=>{
        text.classList.toggle('done')
    })
    deleteBtn.addEventListener('click',()=>{
        li.remove()
    })
    li.append(text)
    li.append(doneBtn)
    li.append(deleteBtn)
    
    
    return {
        li,
        doneBtn,
        deleteBtn
    }
}

form.addEventListener('submit',(a)=>{
    a.preventDefault()
})
function appSpisok(name){
    document.addEventListener('DOMContentLoaded', function (){
        let container = document.getElementById('container')
        let TodoItemForm = createTodoItemForm()

        

        
        container.append(heading)
        container.append(createAppTitle(name))
        
        container.append(TodoItemForm.form)
        form.addEventListener('submit',(a)=>{
            a.preventDefault()
            // if (!TodoItemForm.inp.value) {
            //     return 
            // }
           

            let el = createTodoItem(TodoItemForm.inp.value)
            container.append(ul)
            ul.append(el.li) 
           
            TodoItemForm.inp.value = ''
            container.querySelector(".btn").disabled = true

                

        })
                      
        container.querySelector(".btn").disabled = true
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



