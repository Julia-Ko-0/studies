let ul = document.getElementById('ul')
let div = document.getElementById("btn")

async function appServer(a){
    const response = await fetch(`https://gorest.co.in/public-api/posts?page=${a}`,{
        method:"GET"
    })
    
    const date = await response.json()
    console.log(date)
    console.log('aaaa')
    for(let i = 0;i< 100;i++){
        console.log('sds')
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
    p.href = `index_2.html?id=${id}`
    li.append(p)
    ul.append(li)
    // p.addEventListener("click",()=>{
    //     sessionStorage.setItem('ids', id)
    // })
    

}
function createBlog2(title,bady){
    let h1 = document.createElement("h1")
    let body = document.createElement("h2")
    h1.textContent = title
    body.textContent = bady
    ul.append(h1)
    ul.append(body)

}

function createBtn(i){
    
        let btn = document.createElement("button")
        btn.textContent = i
        div.append(btn)
        btn.href = `index.html?page=${i}`
        btn.addEventListener("click",()=>{
            
            // console.log(a)
            appServer(i)
            
            
            
            
        })   
        
        
}
function appBlog(){
    // for(let i = 0;i<mas.length;i++){
    //     createServer(mas[i],owner)
    // }
    let id = new URLSearchParams(location.search).get("page")
    // document.addEventListener("DOMContentLoaded",()=>{
    //     let url = new URLSearchParams(location.search)
    //     console.log(url)
    //     appServer(url)
    // }) 
    for (let i = 1;i<10;i++){
        createBtn(i)
    }
    // let p = createBlog()
    // console.log(p.btn.textContent)
    appServer(id)
    

    // if(owner = 2){
    //     appServer2(cr.id)
    // }
    // let cr = createBlog()
    // appServer2(cr.id)

    
}
function appBlog2(){
   let id = new URLSearchParams(location.search).get("id")
   console.log(id)
    appServer2(id)
    // let cr = createBlog()
    // console.log(cr.id)
    
    
}