function appSpisok(){
let heading = document.createElement('h1')
heading.innerHTML = 'Игра '
heading.className = 'Игра'
let  title = document.createElement('h2')
let form = document.createElement("form")
form.classList = 'form'

let ul = document.createElement("ul")
ul.className = "block"
let mas_ch_1 = []
let mas_ch_2 = []

// function createAppTitle(name_title){
//     title.textContent = name_title
//     title.className = 'title'
//     return title
// }
function createApp(){
    while(mas_ch_1.length<4  ){
        let chislo = Math.floor( Math.random() * (5 - 1)+1)
        if(mas_ch_1.includes(chislo)){
        }
        else {
            mas_ch_1.push(chislo)
        }    
    }
    while( mas_ch_2.length <4 ){
        let chislo = Math.floor( Math.random() * (5 - 1)+1)
        if(mas_ch_2.includes(chislo)){
        }
        else {
            mas_ch_2.push(chislo)
        }    
    }
    return{
        mas_ch_1,
        mas_ch_2
    }
    // можно мешать уже имеющ мас 
    // let chislo = mas_ch_1.concat(mas_ch_1).sort(function () {
    //     return  Math.random()-0.5 ;
    //   });
    //   console.log(chislo)
    // return(chislo)
}
let mas = []

function createElementLi (el){
    let div = document.createElement("div")
    div.className = 'div'
    let text = document.createElement('p')
    text.textContent = el
    text.className ='text'
    let span = document.createElement("span")
    span.className = "li"
    div.append(text)
    div.append(span)
   
    // div.addEventListener("click",()=>{
    //     div.classList.add('ch')
        
           
    //             let znach = el
    //             console.log(znach)
    //             mas.push(znach)
    //             console.log(mas)
    //             play(mas)
    // })
    
    return {
        div,
        text
    }
}
// function play(app){
    
//         if (app[0] == app[1]){
//             console.log('aaaaa')
//             div.classList.add('win')
//             div.disabled = false
//             mas = []
//         }
//         else{
//             div.classList.add('div')
//             mas = []
//         }
    
// }
let count = 0

    let container = document.getElementById('container')
    
    let crApp = createApp()
    container.append(heading)

    // container.append(createAppTitle(name))
    console.log(mas_ch_1)
    console.log(mas_ch_2)
    for(let i = 0; i < 4;i++){
        let elem_1 =createElementLi(crApp.mas_ch_1[i])
        ul.append(elem_1.div)
        container.append(ul)
        let elem_2 =createElementLi(crApp.mas_ch_2[i])
        ul.append(elem_2.div)
        container.append(ul)
    }
    
    div.div.addEventListener("click",(sobt)=>{
        let clicked = sobt.target;
        if(count<2){
            count++
            if(count==1){
                let el1 = clicked.text
                clicked.div.classList.add('ch')
            }
            else{
                let el2 = clicked.text
                clicked.div.classList.add('ch')
            }
        }
        
        
           
                // let znach = el
                // console.log(znach)
                // mas.push(znach)
                // console.log(mas)
                // play(mas)
    })
    // play(mas)
    // for(let i in mas_ch_2){
    //     let elem =createElementLi(crApp.mas_ch_2[i])
    //     ul.append(elem.div)
    //     container.append(ul)
    // }
    
}
// createElement(mas_ch_1,mas_ch_2)