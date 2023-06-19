
let app = [
    {
        num: 2,
        surname: "Petrov",
        name: "George",
        age: 18
    },
    {
        num: 1,
        surname: "Luginin",
        name: "Kirill",
        age: 17
    },
    {
        num: 3,
        surname: "Popov",
        name: "Ivan",
        age: 18
    }
];

let tBody = document.getElementById("tbody");
let table = document.getElementById("table");
let thTags = document.getElementsByTagName("th");
let th1 = document.getElementById("th1")
let th2 = document.getElementById("th2")
let th3 = document.getElementById("th3")
let th4 = document.getElementById("th4")

let a = 0
function create_table(mas){
    
    for(let i = 0; i<mas.length; i++){
        let tr = document.createElement("tr")
        let td1 = document.createElement('td')
        td1.className = "td"
        let td2 = document.createElement('td')
        td2.className = "td"
        let td3 = document.createElement('td')
        td3.className = "td"
        let td4 = document.createElement('td')
        td4.className = "td"

        td1.innerText = mas[i].num
        td2.innerText = mas[i].surname
        td3.innerText = mas[i].name
        td4.innerText = mas[i].age
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        table.append(tr)
    }
}
function crT(){
    for(let i = 0; i<app.length; i++){
        let tr = document.createElement("tr")
        let td1 = document.createElement('td')
        td1.className = "td"
        let td2 = document.createElement('td')
        td2.className = "td"
        let td3 = document.createElement('td')
        td3.className = "td"
        let td4 = document.createElement('td')
        td4.className = "td"

        td1.innerText = app[i].num
        td2.innerText = app[i].surname
        td3.innerText = app[i].name
        td4.innerText = app[i].age
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        tBody.append(tr)
    }
}

function cr_spisok(){
    crT()
    th3.addEventListener('click',()=>{
        if(a == 0){
            console.log("fghfh")
            tBody.remove()
    
            let mas = app.sort((a,b)=>{
                if(a.name < b.name) return -1
                if(a.name> b.name) return 1
            })
            console.log(mas)
            create_table(mas)
            a = 1
            console.log(a)
            return
        }
        if(a==1){
            window.location.reload()
        }
       
    })
    th2.addEventListener('click',()=>{
        if(a == 0){
            console.log("fghfh")
            tBody.remove()
    
            let mas = app.sort((a,b)=>{
                if(a.surname < b.surname) return -1
                if(a.surname> b.surname) return 1
            })
            console.log(mas)
            create_table(mas)
            a = 1
            console.log(a)
            return
        }
        if(a==1){
            window.location.reload()
        }
       
    })
    th4.addEventListener('click',()=>{
        if(a == 0){
            console.log("fghfh")
            tBody.remove()
    
            let mas = app.sort((a,b)=>{
                if(a.age < b.age) return -1
                if(a.age> b.age) return 1
            })
            console.log(mas)
            create_table(mas)
            a = 1
            console.log(a)
            return
        }
        if(a==1){
            window.location.reload()
        }
       
    })


}