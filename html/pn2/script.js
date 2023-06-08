let app = [
    {
        _name : 'Kola',
        _lastname:'Ivanov',
        _patronymic:'Petrov',
        _data:{
            chislo:"02",
            mas:"05",
            year:"2005"
        },
        _nachOb:"02.10.2017",
        _facult:"Информатика"
    },
    {
        _name:'Ola',
        _lastname:'Ivanova',
        _patronymic:'Petrov',
        _data:{
            chislo:"01",
            mas:"05",
            year:"2002"
        },
        _nachOb:"09.07.2017",
        _facult:"Математика"
    },
    {
        _name:'Ivan',
        _lastname:'Kyznecov',
        _patronymic:'Grishin',
        _data:{
            chislo:"03",
            mas:"10",
            year:"2003"
        },
        _nachOb:"07.11.2020",
        _facult:"История"
    }
]

function cr_localStor(name,lname,pname,_chislo,_mes,_year,yearOb,facul){
    app.push({
        _name:name,
        _lastname:lname,
        _patronymic:pname,
        _data:{
            chislo:_chislo,
            mas:_mes,
            year:_year,
        },
        _nachOb:yearOb,
        _facult:facul

    })
    localStorage.setItem("table", JSON.stringify(app))

}
function createTable(i){
    let obj = app[i]
    let name = obj._name
    let lName = obj._lastname
    let patrName = obj._patronymic
    let data_ch = obj._data.chislo
    let data_mes = obj._data.mas
    let data_year = obj._data.year
    let nac_ob = obj._nachOb
    let facul = obj._facult
    let date = data_ch+"."+ data_mes +"."+ data_year
    return {
        name,
        lName,
        patrName,
        date,
        nac_ob,
        facul
    }
    // let td1 = document.createElement('td')
    // let td2 = document.createElement('td')
    // let td3 = document.createElement('td')
    // let td4 = document.createElement('td')
    // let td5 = document.createElement('td')
    // let td6 = document.createElement('td')
    // let tr = document.createElement('tr')
    // td1.innerText = name
    // td2.innerText = lName
    // td3.innerText = patrName
    // td4.innerText = data_ch+"."+ data_mes +"."+ data_year
    // td5.innerText = nac_ob
    // td6.innerText = facul
    // // console.log(td4)
    // // console.log(td1)
    // let table = document.getElementById("table")
    // tr.appendChild(td1)
    // tr.appendChild(td2)
    // tr.appendChild(td3)
    // tr.append(td4)
    // tr.appendChild(td5)
    // tr.appendChild(td6)
    // table.append(tr)
    // return tr
    
}
function createNable_zn(name,sname,pname,date,nac_ob,_facul){

    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    let td5 = document.createElement('td')
    let td6 = document.createElement('td')
    let td7 = document.createElement('td')
    let tr = document.createElement('tr')
    td1.innerText = name
    td2.innerText = sname
    td3.innerText = pname
    td4.innerText = date
    td5.innerText = nac_ob
    td6.innerText = _facul
    let bt = document.createElement("button")
    bt.textContent = "удалить"
    bt.addEventListener('click',()=>{
        console.log(name,sname,pname,_facul)
        console.log(app)
        for(let i in app){
            if(app[i]._name == name 
                && app[i]._lastname == sname 
                && app[i]._patronymic == pname 
                && app[i]._facult == _facul
                && `${app[i]._data.chislo}.${app[i]._data.mas}.${app[i]._data.year}`== date
                ){
                tr.remove()
                console.log(`${app[i]._data.chislo}.${app[i]._data.mas}.${app[i]._data.year}`)
                app.splice(i,1,)
                localStorage.setItem("table", JSON.stringify(app))
            }
        }
        
    })
    td7.append(bt)
    // console.log(td4)
    // console.log(td1)
    let table = document.getElementById("table")
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.append(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(td7)
    table.append(tr)
    return tr
}

function create_str(){
    let th_name = document.getElementById("nname")
    console.log(JSON.parse(localStorage.getItem("table")))

    if(JSON.parse(localStorage.getItem("table"))==null){
        localStorage.setItem("table", JSON.stringify(app))
        //    let table = document.getElementsByClassName("table")
        app = JSON.parse(localStorage.getItem("table"))
        for(let i = 0;i<app.length; i++){
            let a=createTable(i)
            console.log("aaaa")
            console.log(a)
            createNable_zn(a.name,a.lName,a.patrName,a.date,a.nac_ob,a.facul)
            
        }
    }
    else{
        app = JSON.parse(localStorage.getItem("table"))
        for(let i = 0;i<app.length; i++){
            let a=createTable(i)
            console.log("aaaa")
            console.log(a)
            createNable_zn(a.name,a.lName,a.patrName,a.date,a.nac_ob,a.facul)
            
        }
    }

    let in_name = document.getElementById("name")
    let in_lname=document.getElementById("in_s_name")
    let pNane=document.getElementById("in_p_name")
    let date=document.getElementById("date")
    let date_nach=document.getElementById("date_ob")
    let facult =document.getElementById("fac")
    let but = document.getElementById("button")
    but.addEventListener("click",()=>{
        if(in_name.value == "" || in_lname.value  == ""|| pNane.value  == ""|| date.value  == ""|| date_nach.value  == ""|| facult.value == ""){
            alert("Пожалуйста заполните все поля")
        }
        else{
            cr_localStor(in_name.value,in_lname.value,pNane.value,date.value.slice(0,2),date.value.slice(3,5),date.value.slice(6,10),date_nach.value,facult.value)
            // chislo,_mes,_year,  earOb,facul
            createNable_zn(in_name.value,in_lname.value,pNane.value,date.value,date_nach.value,facult.value)
            in_name.value = "" 
            in_lname.value  = ""
            pNane.value  = ""
            date.value  = ""
            date_nach.value  = ""
            facult.value = ""
            app = JSON.parse(localStorage.getItem("table"))


        }
        

    })
    th_name.addEventListener("click",()=>{
        console.log("sdgsdrger")
        app.sort((a,b)=>{
            if(a._name < b._name) return -1
            if(a._name> b._name) return 1
        })
        console.log(app)
        
    })
   
}