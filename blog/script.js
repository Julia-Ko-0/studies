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
        // btn. = `index.html?page=${i}`
        btn.addEventListener("click",()=>{
            document.location= `index.html?page=${i}`
            // console.log(a)
            // let i = new URLSearchParams(location.search).get("page")
            appServer(new URLSearchParams(location.search).get("page"))
            
            
            
            
        })   
        
        
}
function appBlog(){
    // replace(`index.html?page=${1}`)
    // for(let i = 0;i<mas.length;i++){
    //     createServer(mas[i],owner)
    // }
    let str = document.getElementById("p")
    
    let id = new URLSearchParams(location.search).get("page")
    str.textContent = `Страница ${id}`
    // document.addEventListener("DOMContentLoaded",()=>{
    //     let url = new URLSearchParams(location.search)
    //     console.log(url)
    //     appServer(url)
    // }) 
    let a
    if(id<4){
        a = 1
    }
    else{a=(id-2)}
    if(id>=238){
        a = 236
    }
    
    for (let i = a;i<(a+5);i++){
        // let a = new URLSearchParams(location.search).get("id")
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