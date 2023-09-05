//1
function eventAlert(elem){

    document.getElementById('zapoln').value = elem
}
//2
function vvedText(elem){
    let vvod = document.getElementById('kn').value
    if (vvod == false){
        alert('net nechego')
    }
    else{

        alert(`вы ввели: ${vvod}` )
    }
}
//3
function pomenZnach(){
   let text1 = document.getElementById('text1').value
   let text2 = document.getElementById('text2').value

   document.getElementById('text2').value = text1
   document.getElementById('text1').value = text2
}
//4
function blokRazblok(){
    let input = document.getElementById('input')
    input.disabled = true

}
//5
function blokZablok(){
    let input = document.getElementById('input')
    input.disabled = false
    
}
// let cube = document.querySelector(".square")
// cude.style.add = "cv"
let cube = document.querySelector(".square")
   cube.classList.add("sq")

//6
function skrKvadrat(){
   
    // if (document.getElementById("cube").textContent == "Скрыть квадрат"){
    //    console.log(cube)
    //     cube.classList.remove("sq")
    //     document.getElementById("cube").textContent = "Покахать квадрат"
    // }
    // else
    // {
    //     console.log(cube)
    //     cube.classList.add("sq")
    //     document.getElementById("cube").textContent == "Скрыть квадрат"
    // }
    cube.classList.toggle("sq")
    if (document.getElementById("cube").textContent == "Скрыть квадрат"){
        document.getElementById("cube").textContent = "Покахать квадрат"
    }
    else{
        console.log("asf")
        document.getElementById("cube").textContent = "Скрыть квадрат"
   }
}
// 7
let cube2 = document.querySelector(".square2")
cube2.classList.add("sq2")
// 8
// let cubes = document.querySelector(".square3")
let div = document.getElementById("div_sq")
let sqr3 = document.querySelectorAll('.sq3')
// let cube4 = document.querySelector(".square4")
// let cube5 = document.querySelector(".square5")
// let cube6 = document.querySelector(".square6")
// cube3.classList.add("sq3")
// cube4.classList.add("sq3")
// cube5.classList.add("sq3")
// cube6.classList.add("sq3")
// cubes.classList.add("sq3")
div.addEventListener('click',(event)=>{
    console.log("seeeeeeeeee")
    let sqr = event.target
    // sqr.style.backgroundColor = 'red'
    console.log(sqr3[1].style.backgroundColor)
    // if(sqr.className != 'sq3'){
    //     return
    // }
    for(let i = 0;i<sqr3.length;i++){
        if(sqr3[i] == sqr && sqr3[i].style.backgroundColor == 'red'){
            sqr3[i].style.backgroundColor = 'green'
        }
        else{
            sqr3[i].style.backgroundColor = 'red'
        }
    }

})
//9




