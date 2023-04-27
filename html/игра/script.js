let heading = document.createElement('h1')
heading.id = 'hhh'
heading.innerHTML = 'Игра '
heading.className = 'Игра'
let  title = document.createElement('h2')
let form = document.createElement("form")
form.classList = 'form'

let ul = document.createElement("ul")
ul.className = "block"
let mas_ch_1 = []
let mas_ch_2 = []
let mas_ch_3 = []

// function createAppTitle(name_title){
//     title.textContent = name_title
//     title.className = 'title'
//     return title
// }
function createApp(){
    while(mas_ch_3.length<8){
        if(mas_ch_1.length<4  ){
            let chislo = Math.floor( Math.random() * (5 - 1)+1)
            if(mas_ch_1.includes(chislo)){
            }
            else {
                mas_ch_1.push(chislo)
                mas_ch_3.push(chislo)
            }    
        }
        if( mas_ch_2.length <4 ){
            let chislo = Math.floor( Math.random() * (5 - 1)+1)
            if(mas_ch_2.includes(chislo)){
            }
            else {
                mas_ch_2.push(chislo)
                mas_ch_3.push(chislo)
            }    
        }
    }
    
    return{
        mas_ch_3
    }
    // можно мешать уже имеющ мас 
    // let chislo = mas_ch_1.concat(mas_ch_1).sort(function () {
    //     return  Math.random()-0.5 ;
    //   });
    //   console.log(chislo)
    // return(chislo)
}
let count = 0 
let el1 = ""
let el2 = ""
let id_ = -1
let win_id =""


function createElementLi (el){
    let div = document.createElement("div")
    div.className = 'div'
   div.id = id_
    
    let text = document.createElement('p')
    text.textContent = el
    text.className ='text'
    let span = document.createElement("span")
    span.className = "li"
    div.append(text)
    div.append(span)
   id_++
    // div.addEventListener("click",()=>{
        
    //     if(count < 2) {
    //         console.log('d')
    //         count++
    //         if(count === 1){
    //             el1 = el
    //             let id = el1.id
    //             console.log(id)
    //             let elem = document.getElementById(id)
    //             console.log(el)
    //             elem.classList.add('ch')
    //         }
           
           
    //     }
    //     if (count === 2){
    //         if(el1 === el){
    //             let elem = document.getElementById(el)
    //             elem.classList.add('win')
                
    //             // div[el2].classList.add('win')
    //             count = 0
                
    //         }
    //         else{
    //             let elem = document.getElementById(el)
    //             let elem2 = document.getElementById(el1)
    //             elem.classList.add('fff')
                
    //             count = 0
                
    //         }
    //     }
        
           
                
    // })
    // id_++
    div.addEventListener("click", ()=>{
        
            console.log('sdfsf')
            if(count < 2) {
                console.log('d')
                count++
                if(count === 1){
                    el1 = el
                    console.log(el)
                    console.log(div.id)
                    div.classList.add('ch')
                    win_id = div.id
               
                  
                }
                else{
                    el2 = el
                    div.classList.add('ch')
                }
                       
            }
            if (count === 2){
                if(el1 === el2){
                    let el_win1 = document.getElementById(win_id)   
                    el_win1.classList.add('win')
                    div.classList.add('win')
                            // div[el2].classList.add('win')
                  
                    
                            
                }
                else{
                    let el_win1 = document.getElementById(win_id)  
                    el_win1.classList.add('fff')      
                    div.classList.add('fff')
                   
                            
                }
                count = 0
            }
                    
        })
            
    
    return {
        div,
        text,
        span
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

function appSpisok(){
    let container = document.getElementById('container')
    let elemLi = createElementLi()
    let crApp = createApp()
    container.append(heading)
    console.log(mas_ch_3)
    // container.append(createAppTitle(name))
    console.log(mas_ch_1)
    console.log(mas_ch_2)
    for(let i = 0; i < 8;i++){
        let elem_ =createElementLi(crApp.mas_ch_3[i])
       elemLi.div.id = i
        ul.append(elem_.div)
        container.append(ul)
    }
    // elemLi.text.addEventListener("click", ()=>{
        
    //     console.log('sdfsf')
    //     if(count < 2) {
    //                 console.log('d')
    //                 count++
    //                 if(count === 1){
    //                     el1 = el
    //                     console.log(el)
    //                     div.classList.add('ch')
    //                 }
    //                 else{
    //                     el2 = el
    //                     div.classList.add('ch')
    //                 }
                   
    //             }
    //     if (count === 2){
    //         if(el1 === el2){
                    
    //             div.classList.add('win')
    //                     // div[el2].classList.add('win')
    //             count = 0
                        
    //         }
    //         else{
                        
    //             div.classList.add('fff')
    //             count = 0
                        
    //         }
    //         count = 0
    //     }
                
    // })
        
           
                
    // })
    
    // play(mas)
    // for(let i in mas_ch_2){
    //     let elem =createElementLi(crApp.mas_ch_2[i])
    //     ul.append(elem.div)
    //     container.append(ul)
    // }
    
}

// createElement(mas_ch_1,mas_ch_2)