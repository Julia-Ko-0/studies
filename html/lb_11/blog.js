let btn_forward = document.getElementById("forward")
let btn_back = document.getElementById("back")
let ul = document.getElementById("ul")

mas = [00000,99999,88888,67777777,333333333,33333,111111111111,555555,333333]

async function createServer(name_,_id){
    const response = await fetch("http://localhost:3000/api/todos",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name: name_,
            owner:_id,
        }),
    
    })
    const date = await response.json()
    console.log("aaa",date)
    // let elem = createLi(date.name,date.id)
    // ul.append(elem.li)
        // let p = document.createElement("p")
        // p.textContent = name_
        // console.log(p)
        // let li = document.createElement("li")
        // li.append(p)
        // ul.append(li)
    
}
async function appServer(owner){
    const response = await fetch("http://localhost:3000/api/todos",{method:"GET"})
    const serv = await response.json()
    console.log(serv)
    for(let i in serv){
        if(serv[i].owner == owner){
            let p = document.createElement("p")
            p.textContent = serv[i].name
            console.log(p)
            let li = document.createElement("li")
            li.append(p)
            ul.append(li)
        }
        
    }
    
}
// масив на сервер(имя+ид(номер списка)) =отрисовка с сервера 
// function createElementUl(b,a,owner_){
    
    
//     for(let i = b; i<a;i++){
//         console.log(mas[i])
//         createServer(mas[i],owner_)
//         // createServer(mas[i],owner_)
//         // let p = document.createElement("p")
//         // p.textContent = mas[i]
//         // console.log(p)
//         // let li = document.createElement("li")
//         // li.append(p)
//         // ul.append(li)
//     }
//     appServerToDo(owner_)
// }
function createLi(name,id){
    let li = document.createElement('li')
    let btns = document.createElement('div')
    li.className = 'li'
    let text = document.createElement('p')
    
    text.textContent = name
    text.className ='text'

    li.append(text)
    return{
        li
    }
}


function createList(b,c,owner_){
    for(let i = b; i<c;i++){
        console.log(mas[i])
        createServer(mas[i],owner_)
    }
    ul.addEventListener('submit',(a)=>{
        a.preventDefault()
        appServer(owner_)
        
    })
    // appServerToDo(owner_)
}

