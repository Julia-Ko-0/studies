function create_Kv(){
    let btn = document.getElementById("btn")
    let inp = document.getElementById("input")
    // inp.value = "black"

    let qv = document.getElementById("div")
    // btn.addEventListener('click',()=>{
    //     console.log(inp.value)
    //     qv.style.background = inp.value
    // })
    inp.addEventListener("input",()=>{
        qv.style.background = inp.value
    })
}