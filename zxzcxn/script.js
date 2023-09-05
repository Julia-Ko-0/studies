let app = [
    {
        lname:'petrov',
        age:'17',
        ocenk:'4'
    },
    {
        lname:'Kyznecov',
        age:'18',
        ocenk:'4'
    },
    {
        lname:'Trosina',
        age:'16',
        ocenk:'5'
    },
]
let div = document.getElementById('div')
function crApp(elem){
    app.push({
        lname:elem,
        age:'18',
        ocenk:'5'
    })
    localStorage.setItem('aaa',JSON.stringify(app))
}
function crEl(el1,el2,el3){
    let lm = document.createElement('p')
    let ag = document.createElement('p')
    let oc = document.createElement('p')
    lm.textContent = el1
    ag.textContent = el2
    oc.textContent = el3
    div.append(lm)
    div.append(ag)
    div.append(oc)

}

function cr_el(){
    if(localStorage.getItem('aaa')){
       app = JSON.parse(localStorage.getItem('aaa'))
    }
    

    for(let i = 0;i<app.length;i++){
        crEl(app[i].lname,app[i].age,app[i].ocenk)
        console.log(app[i].lname)
    }
    let inp = document.getElementById('inp')
    let btn  = document.getElementById('btn')
    btn.addEventListener('click',()=>{
        crApp(inp.value)
        console.log(app)
        crEl(inp.value,'18','5')
        inp.value = ''
    })
}