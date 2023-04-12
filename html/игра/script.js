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
function createAppTitle(name_title){
    title.textContent = name_title
    title.className = 'title'
    return title
}
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
    console.log(mas_ch_1)
    return{
        mas_ch_1,
        mas_ch_2
    }
}

function createElementLi (el){
    let div = document.createElement("div")
    div.className = 'li'
    let text = document.createElement('p')
    text.textContent = el
    text.className ='text'
    div.append(text)
    return {
        div,
        text
    }
}

function appSpisok(name){
    let container = document.getElementById('container')
    
    let crApp = createApp()
    container.append(heading)

    container.append(createAppTitle(name))

    for(let i in mas_ch_1){
        let elem =createElementLi(crApp.mas_ch_1[i])
        ul.append(elem.div)
        container.append(ul)
    }
    for(let i in mas_ch_2){
        let elem =createElementLi(crApp.mas_ch_2[i])
        ul.append(elem.div)
        container.append(ul)
    }
    
}
// createElement(mas_ch_1,mas_ch_2)