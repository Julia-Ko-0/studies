
let div = document.getElementById("container")
console.log(div)
div.addEventListener("click",(div)=>{
    console.log("dsG")
    

    let event = div.target
    console.log(event)
    console.log(event.textContent) 
    console.log("dsgf")
})
