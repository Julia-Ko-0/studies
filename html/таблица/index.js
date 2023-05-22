let app = [
    {
        _name : 'Kola',
        _lastname:'Ivanov',
        _patronymic:'Petrov',
        _data:"01.05.2000",
        _nachOb:"02.10.2017",
        _facult:"sdf",
        _birthday:"08-11-2005",
        _year:"2020"
    },
    {
        _name:'Ola',
        _lastname:'Ivanova',
        _patronymic:'Petrov',
        _data:"01.05.2002",
        _nachOb:"09.07.2017",
        _facult:"sesrf",
        _birthday:"07-05-2007",
        _year:"2022"
    },
    {
        _name:'Ivan',
        _lastname:'Kyznecov',
        _patronymic:'Grishin',
        _data:"01.05.2003",
        _nachOb:"07.11.2020",
        _facult:"dsfsf",
        _birthday:"18-09-2000",
        _year:"2018"
    }
]



function appDan(name,sname,pname,facult,birthday,year){
    app.push({_name:name,_lastname:sname,_patronymic:pname,_facult:facult,_birthday:birthday,_year:year})
    localStorage.setItem("table", JSON.stringify(app))
}
function createTablBody(i){
    
    let obj = app[i]
    let name = obj._name
    let lName = obj._lastname
    let patrName = obj._patronymic
    let facult = obj._facult
    let birthday = obj._birthday
    let year = obj._year
    
    return{

        name,
        lName,
        patrName,
        facult,
        birthday,
        year
    }
}
function createTable_vn (name,sname,pname,facult,birthday,year){
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    let td5 = document.createElement('td')
    let td6 = document.createElement('td')
    let td7 = document.createElement('td')
    let tr = document.createElement('tr')
   td1.innerHTML = name
   td2.innerHTML = sname
   td3.innerHTML = pname
   td4.innerHTML = facult
   td5.innerHTML = birthday
   td6.innerHTML = year

   tr.appendChild(td1)
   tr.appendChild(td2)
   tr.appendChild(td3)
   tr.appendChild(td4)
   tr.appendChild(td5)
   tr.appendChild(td6)
   tr.appendChild(td7)
   return tr
}
// document.div.input.onsubmit = function() {
//     var message = this.message.value;
//     console.log(message)
//     return false;
//   };
let heading = document.createElement('h1')
heading.innerHTML = 'mkvmldk'
// localStorage.setItem("table", JSON.stringify(app))
function createTable(){
    
    
        let input_FIO = document.getElementById("INP__FCS")
        let input_faclt = document.getElementById("INP__FAC")
        let input_biday = document.getElementById("INP__DOB")
        let input_year = document.getElementById("INP__YOS")
        let btn_got = document.getElementById("ready__button")
    
        let conteiner = document.getElementById('container')
        conteiner.append(heading)
        let table = document.createElement('table')
        let thead = document.createElement('thead')
        let tr1 = document.createElement('tr')
        let tbody = document.createElement('tbody')

        table.appendChild(thead)
        table.appendChild(tbody)
        table.append(tr1)
        btn_got.addEventListener("click",()=>{
            let mas = input_FIO.value.split(" ")
            console.log(mas)
            console.log(input_faclt.value)
            console.log(app)
            appDan(mas[0],mas[1],mas[2],input_faclt.value,input_biday.value,input_year.value)
            
        
            let name = createTable_vn(mas[0],mas[1],mas[2],input_faclt.value,input_biday.value,input_year.value)
            tbody.appendChild(name)
        })
  
        
       
        if (localStorage.getItem("table")){
            app = JSON.parse(localStorage.getItem("table"))
            console.log("dfdfklsdjf")
            for(let i = 0; i<app.length;i++){
        
                let name = createTable_vn(createTablBody(i).name,createTablBody(i).lName,createTablBody(i).patrName,createTablBody(i).facult,createTablBody(i).birthday,createTablBody(i).year)
                tbody.appendChild(name)
            }
        }
       if(localStorage.getItem("table")==null){
        for(let i = 0; i<app.length;i++){
        
            let name = createTable_vn(createTablBody(i).name,createTablBody(i).lName,createTablBody(i).patrName,createTablBody(i).facult,createTablBody(i).birthday,createTablBody(i).year)
            tbody.appendChild(name)
        }
       }

 


    let head1 = document.createElement('th')
    let head2 = document.createElement('th')
    let head3 = document.createElement('th')
    let head4 = document.createElement('th')
    let head5 = document.createElement('th')
    let head6 = document.createElement('th')
    head1.innerHTML = "Name"
    head2.innerHTML = "LastName"
    head3.innerHTML = "Patronymic"
    head4.innerHTML = "facult"
    head5.innerHTML = "birthday"
    head6.innerHTML = "year"
    thead.appendChild(tr1)
    tr1.appendChild(head1)
    tr1.appendChild(head2)
    tr1.appendChild(head3)
    tr1.appendChild(head4)
    tr1.appendChild(head5)
    tr1.appendChild(head6)

    
    
    conteiner.appendChild(table)
    
    
}