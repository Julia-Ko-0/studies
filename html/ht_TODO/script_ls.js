let heading = document.createElement('h1')
heading.innerHTML = 'TODO'
heading.className = 'TODO'
let  title = document.createElement('h2')
let form = document.createElement("form")
form.classList = 'form'

let ul = document.createElement("ul")

let mas = []

function createTodoApp(name_  ,done_ , id_ ){
     
    mas.push ({nome:name_,done:done_,id:id_})
    
        localStorage.setItem(id_, JSON.stringify(mas))
       
    

    
       
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
        
        done == false ? done = true : done = false
        for(let i in mas){
            if(mas[i].nome == name){
                mas[i].done = done
                localStorage.setItem('Список 1', JSON.stringify(mas))
            }
        }
    })
        
       
        
    
    deleteBtn.addEventListener('click',()=>{
        li.remove()
        // done = false
        for(let i in mas){
            if(mas[i].nome == name){
                mas.splice(i,1,)
                localStorage.setItem('Список 1', JSON.stringify(mas))
            }
        }
        
            // for(let i in mas){
            //     console.log(mas)
            //     console.log('nnnnn')
            //     console.log(mas)
            //     if (mas[i].nome == li.text){
            //         console.log('aaaaa')
            //         localStorage.removeItem(`${mas[i]}`)
            //         break
            //     }
            // }
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
        if (localStorage.getItem(name_todo)){
            console.log('dfg')
            mas = JSON.parse(localStorage.getItem(name_todo))
            console.log(mas)
            for(let i in mas){
                console.log('sdafd')
                
                container.append(ul)
                let elems = createTodoItem(mas[i].nome)
                ul.append(elems.li)

            }
        }
        // console.log(lcSt)
        form.addEventListener('submit',(a)=>{
            a.preventDefault()
            
            // if (!TodoItemForm.inp.value) {
            //     return 
            // }
            
            // if (localStorage.getItem(name_todo)){
            //     console.log('dfg')
            //     mas = JSON.parse(localStorage.getItem(key))
            //     console.log(mas)
            //     for(let i in mas){
            //     console.log('sdafd')
            //     let elLs = JSON.parse(localStorage.getItem(i))
            //     ul.append(createTodoItem(elLs))

            //     }
            // }
            let el = createTodoItem(TodoItemForm.inp.value)
            container.append(ul)
            
            ul.append(el.li) 
           
            
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
                console.log(mas)  
                
            }

           
        })
        TodoItemForm.Btn1.addEventListener("click",()=>{
            console.log('dfh')
            createTodoApp(TodoItemForm.inp.value,todoItem.done,name_todo)
            
        })
        // todoItem.doneBtn.addEventListener('click', ()=>{
        //     text.classList.toggle('done')
            
        //     done == false ? done = true : done = false
        //     for(let i in mas){
        //         if(mas[i].nome == nome){
        //             mas[i].done = done
        //             localStorage.setItem(id_, JSON.stringify(mas[i]))
        //         }
        //     }
        // })
    })
}
appSpisok('Список 1')
// appSpisok('Список 2')




