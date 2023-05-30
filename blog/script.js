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
let ids
async function appServer(){
    const response = await fetch("https://gorest.co.in/public-api/posts?page=10",{
        method:"GET"
    })
    
    const date = await response.json()
    console.log(date)
    console.log('aaaa')
    for(let i = 0;i< 100;i++){
        console.log('aaaa')
        let elem = createBlog(date.data[i].title,date.data[i].id)
        
      
      
    }
}
async function appServer2(id){
    const response = await fetch(`https://gorest.co.in/public-api/posts/${id}`,{
        method:"GET"
    })
    .then((response)=>response.json())
    .then((app)=> console.log(app))
    
}
function createBlog(name,id){
    let li = document.createElement("li")
    let p = document.createElement("a")
    p.textContent = name
    p.href = "index_2.html"
    li.append(p)
    ul.append(li)
    p.addEventListener("click",()=>{
        ids
        console.log(ids)
    })

}
function appBlog(owner){
    // for(let i = 0;i<mas.length;i++){
    //     createServer(mas[i],owner)
    // }
    appServer()

    
}
