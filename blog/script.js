let ul = document.getElementById('ul')

// async function createServer(nome,_id){
//     const response = await fetch("http://localhost:3000/api/todos",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify({
//             name: nome,
//             owner:_id,
//             done: false
//         }),

//     })
//     const app = await response.json()
//     // .then((response)=>response.json())
//     // .then((app)=> console.log(app))
// }

async function appServer(){
    const response = await fetch("https://gorest.co.in/public-api/posts?page=10",{
        method:"GET"
    })
    
    const date = await response.json()
    console.log(date)
    console.log('aaaa')
    for(let i = 0;i< 100;i++){
        console.log('aaaa')
        // ids = date.data[i].id
        let elem = createBlog(date.data[i].title,date.data[i].id)
        
        
      
      
    }
}
async function appServer2(id){
    const response = await fetch(`https://gorest.co.in/public-api/posts/${id}`,{
        method:"GET"
    })
    const date = await response.json()
    console.log(date)
    console.log(date.body)

    createBlog2(date.data.title, date.data.body)
    // .then((response)=>response.json())
    // .then((app)=> createBlog(app,id))
    
}
function createBlog(name,id){
    let li = document.createElement("li")
    let p = document.createElement("a")
    p.textContent = name
    p.href = "index_2.html"
    li.append(p)
    ul.append(li)
    p.addEventListener("click",()=>{
        sessionStorage.setItem('ids', id)
    })
    

}
function createBlog2(title,bady){
    let h1 = document.createElement("h1")
    let body = document.createElement("h2")
    h1.textContent = title
    body.textContent = bady
    ul.append(h1)
    ul.append(body)

}
function appBlog(){
    // for(let i = 0;i<mas.length;i++){
    //     createServer(mas[i],owner)
    // }
    appServer()

    // if(owner = 2){
    //     appServer2(cr.id)
    // }
    // let cr = createBlog()
    // appServer2(cr.id)

    
}
function appBlog2(){
    console.log(sessionStorage.getItem('ids'))
    appServer2(sessionStorage.getItem('ids'))
    // let cr = createBlog()
    // console.log(cr.id)
    
    
}