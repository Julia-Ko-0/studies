let heading = document.createElement('h1')
heading.innerHTML = 'TODO'
heading.className = 'TODO'
let  title = document.createElement('h2')
let form = document.createElement("form")
form.classList = 'form'

let ul = document.createElement("ul")

let mas = []

function createTodoApp(name_  ,done_ , id_ ,owner_){
     
    mas.push({name:name_,done:done_,id:id_,owner:owner_})
    // console.log(mas)
        // localStorage.setItem(id_, JSON.stringify(mas))
     
}
// function createAppList(){
//     for(let i = 1; i<localStorage;i++){
//         JSON.parse(localStorage.getItem(i))

//     }
    
// }

function createAppTitle(name_title){
    title.textContent = name_title
    title.className = 'title'
    return title
}

function createTodoItemForm() {
    
    let inp = document.createElement("input")
    inp.className = "input"
    let Btn1 = document.createElement("button")
    Btn1.textContent = "Добавить задачу"

    Btn1.className = "btn"

   

        // if(inp == ""){
        //     btn.disabled = true
        // }
        // else {
        //     btn.disabled = false
        // }
  

    form.append(inp)
    form.append(Btn1)
   
        
    return {
        form,
        Btn1,
        inp
    }
}

  async function createServerToDo(nome,_done,_id){
    const response = await fetch("http://localhost:3000/api/todos",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name: nome,
            owner:_id,
            done: _done
        }),
    })
    const date = await response.json()
    // .then((response)=>response.json())
    // .then((date)=> console.log(date))
    let el = createTodoItem(date.name,"name_todo",date.id)
        container.append(ul)
            
        ul.append(el.li)
    // createTodoItem(date.name,"name_todo",date.id)
    console.log(date.name)
    
    
}
async function appServerToDo(name_todo){
    const response = await fetch("http://localhost:3000/api/todos",{method:"GET"})
    const serv = await response.json()
    console.log(serv)
    for(let i in serv){
        if(serv[i].owner == name_todo){
            mas.push({name:serv[i].name,done:serv[i].done,id:serv[i].id,name_todo})
            let elems = createTodoItem(serv[i].name,"name_todo",serv[i].id)
            ul.append(elems.li)
            container.append(ul)
            if(serv[i].done === true){        
                elems.text.classList.add('done')
                }
        }
        
    }
    
}
async function deleteiddb(id,_done) {
    fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "DELETE",
    });
  }
  async function doneDb(id,_done) {
    fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        done: _done
    }),
    });
  }
function  createTodoItem(name,name_todo,id){
    
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
    // let done = false
    
    
        
    doneBtn.addEventListener('click', ()=>{
        text.classList.toggle('done')
        
        console.log(mas)
        for(let i in mas){
            
            if(mas[i].name == name){
                mas[i].done == false ? mas[i].done = true : mas[i].done = false
                doneDb(id,mas[i].done)
                console.log(mas[i].done)
                // localStorage.setItem(name_todo, JSON.stringify(mas))
            }
        }
        
        
    })

    deleteBtn.addEventListener('click',()=>{
        li.remove()
        // done = false
        for(let i in mas){
            if(mas[i].nome == name){
                mas.splice(i,1,)
                // localStorage.setItem(name_todo, JSON.stringify(mas))
            }
        }
        deleteiddb(id)
    })
    li.append(text)
    li.append(doneBtn)
    li.append(deleteBtn)
    
    
    return {
        li,
        doneBtn,
        deleteBtn,
        text
    }
}

function appSpisok(name_todo){
    let container = document.getElementById('container')
    let TodoItemForm = createTodoItemForm()
    let todoItem = createTodoItem()        
    container.append(heading)
    container.append(createAppTitle(name_todo))
    appServerToDo(name_todo)    
    container.append(TodoItemForm.form)
    form.addEventListener('submit',(a)=>{
        
        a.preventDefault()
            
        container.querySelector(".btn").disabled = true
            
            
            TodoItemForm.inp.value = ''
           

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
        TodoItemForm.Btn1.addEventListener("click",()=>{ 
            console.log('dfh')
            createTodoApp(TodoItemForm.inp.value,false,name_todo,name_todo)
            createServerToDo(TodoItemForm.inp.value,false,name_todo)
            
        })
       
    
}

