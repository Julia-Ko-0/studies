let heading = document.createElement('h1')

heading.innerHTML = 'Игра'
heading.className = 'play'




// div.append(heading)


// let  title = document.createElement('h2')
// let form = document.createElement("form")
// form.classList = 'form'

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
function createApp(kolVo){
    while(mas_ch_3.length<kolVo){
        if(mas_ch_1.length<kolVo/2 ){
            let chislo = Math.floor( Math.random() * (kolVo/2)+1)
            if(mas_ch_1.includes(chislo)){
            }
            else {
                mas_ch_1.push(chislo)
                mas_ch_3.push(chislo)
            }    
        }
        if( mas_ch_2.length <kolVo/2 ){
            let chislo = Math.floor( Math.random() * (kolVo/2)+1)
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
let coun = 0 
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

    div.addEventListener("click", ()=>{
        
            console.log('sdfsf')
            if(coun < 2) {
                console.log('d')
                coun++
                if(coun === 1){
                    el1 = el
                    console.log(el)
                    console.log(div.id)
                    div.style.backgroundColor = 'rgb(255, 255, 255)'
                   
                    win_id = div.id
               
                  
                }
                else{
                    el2 = el
                    div.style.backgroundColor = 'rgb(255, 255, 255)'
                 
                }
                       
            }
            if (coun === 2){
                if(el1 === el2){
                    let el_win1 = document.getElementById(win_id)   
                    el_win1.classList.add('off')
                    div.classList.add('off')
                    div.style.backgroundColor = 'rgb(64, 185, 111)'
                    el_win1.style.backgroundColor = 'rgb(64, 185, 111)'
                         
                  
                    
                            
                }
                else{
                    let el_win1 = document.getElementById(win_id)  
                
                    setTimeout(()=>{div.style.backgroundColor = 'rgb(0, 0, 0)'}, 700)
                    setTimeout(()=>{el_win1.style.backgroundColor = 'rgb(0, 0, 0)'}, 700)
                   

                   
                            
                }
                coun = 0
            }
                    
        })
            
    
    return {
        div,
        text,
        span
    }
}


function appSpisok(kolVo){
    
    let container = document.getElementById('container')
    let elemLi = createElementLi()
    let crApp = createApp(kolVo)
    container.append(heading)
    console.log(mas_ch_3)
    
    console.log(mas_ch_1)
    console.log(mas_ch_2)
    for(let i = 0; i < kolVo;i++){
        let elem_ =createElementLi(crApp.mas_ch_3[i])
       elemLi.div.id = i
        ul.append(elem_.div)
        container.append(ul)
    }
    container.append(exit)
  
    
}

