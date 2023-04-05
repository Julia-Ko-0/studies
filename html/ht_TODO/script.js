let heading = document.createElement('h1')
heading.innerHTML = 'TODO'
heading.className = 'TODO'
let  title = document.createElement('h2')

let ul = document.createElement("ul")


function createAppTitle(name_title){
    title.textContent = name_title
    title.className = 'title'
    return title
}

function createTodoItemForm() {
    let form = document.createElement("form")
    const inp = document.createElement("input")
    inp.className = "input"
    let btn = document.createElement("button")
    btn.textContent = "Create task"
    btn.className = "btn"
    // btn.disabled = true

    form.append(btn)
    form.append(inp)
   
        
    return {
        form,
        btn,
        inp
    }
}

// input.addEventListener('input',()=>{
//     if (inp = ""){
//         btn.disabled = true
//     }
//     else{
//         btn.disabled = false
//     }
// })


function appSpisok(name){
    document.addEventListener('DOMContentLoaded', function (){
        let container = document.getElementById('container')
        let TodoItemForm = createTodoItemForm()
        
        
        container.append(heading)
        container.append(createAppTitle(name))
        
        container.append(TodoItemForm.form)
        
                    
    
    
    })
}
appSpisok('sareg')


