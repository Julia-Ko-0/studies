let heading = document.createElement('h1')
heading.innerHTML = 'TODO'
heading.className = 'TODO'
let  title = document.createElement('h2')
let form = document.createElement("form")

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

    // btn.className = "btn"
    // if(inp = ""){
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
// let input = createTodoItemForm()
// input.inp.addEventListener('input',()=>{
//     if (inp = ""){
//         btn.disabled = true
//     }
//     else{
//         btn.disabled = false
//     }
// })
function  createTodoItem(name){
    
    let li = document.createElement('li')
    li.textContent = name
    let doneBtn = document.createElement('button')
    let deleteBtn = document.createElement('button')
    doneBtn.textContent = "Сделано"
    deleteBtn.textContent = "Удалить"
    

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
        let todoItem = createTodoItem()

        
        container.append(heading)
        container.append(createAppTitle(name))
        
        container.append(TodoItemForm.form)
        form.addEventListener('submit',(a)=>{
            a.preventDefault()

            let el = createTodoItem(TodoItemForm.inp.value)
            container.append(ul)
            ul.append(el.li) 

        })
                      
    
    
    })
}
appSpisok('sareg')


