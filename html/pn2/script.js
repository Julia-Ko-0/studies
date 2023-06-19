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
        _nachOb:"2017",
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
        _nachOb:"2017",
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
        _nachOb:"2020",
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
function createTable(i,masiv){
    let obj = masiv[i]
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
let trr = document.createElement("tr")
trr.id = "trr"
function createNable_zn(name,sname,pname,date,nac_ob,_facul,masiv){

    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    let td5 = document.createElement('td')
    let td6 = document.createElement('td')
    let td7 = document.createElement('td')
    let tr = document.createElement('tr')
    td1.className = "td" ,"td1"
    td2.className = "td"
    td3.className = "td"
    td4.className = "td"
    td5.className = "td"
    td6.className = "td"
    td7.className = "td"
    tr.className = "tr"

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
        for(let i in masiv){
            if(masiv[i]._name == name 
                && masiv[i]._lastname == sname 
                && masiv[i]._patronymic == pname 
                && masiv[i]._facult == _facul
                && `${masiv[i]._data.chislo}.${masiv[i]._data.mas}.${masiv[i]._data.year}`== date
                ){
                tr.remove()
                console.log(`${masiv[i]._data.chislo}.${masiv[i]._data.mas}.${masiv[i]._data.year}`)
                masiv.splice(i,1,)
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
    trr.append(tr)
    table.append(trr)
    return tr
}
function crTabl2(mas){
    let trr = document.getElementById("trr")
           
           
    trr.remove()
    console.log("sssssssssssss")

        // for(let i = 0;i<app.length; i++){
        //     let a=createTable(i,mas)
        //     console.log("aaaa")
        //     console.log(a)
        //     createNable_zn(a.name,a.lName,a.patrName,a.date,a.nac_ob,a.facul)
            
        // }
 let table = document.getElementById("table")
 for(let i = 0; i<mas.length; i++){
            
        
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        let td7 = document.createElement('td')
        let tr2 = document.createElement('tr')
        td1.innerText = mas[i]._name
        td2.innerText = mas[i]._lastname
        td3.innerText = mas[i]._patronymic
        td4.innerText = mas[i]._data.chislo +"."+mas[i]._data.mas +"."+ mas[i]._data.year
        td5.innerText = mas[i]._nachOb
        td6.innerText = mas[i]._facult

         td1.className = "td" ,"td1"
         td2.className = "td"
         td3.className = "td"
         td4.className = "td"
         td5.className = "td"
         td6.className = "td"
     let bt = document.createElement("button")
     bt.textContent = "удалить"
     bt.addEventListener('click',()=>{
         for(let i in app){
             if(app[i]._name == td1.innerText
                 && app[i]._lastname == td2.innerText 
                 && app[i]._patronymic == td3.innerText
                 && app[i]._facult == td6.innerText
                 ){
                 console.log(td1.innerText)
                 tr2.remove()
                 app.splice(i,1,)
                 localStorage.setItem("table", JSON.stringify(app))
             }
         }
         
     })
    
       td7.append(bt)
        tr2.append(td1)
        tr2.append(td2)
        tr2.append(td3)
        tr2.append(td4)
        tr2.append(td5)
        tr2.append(td6)
        tr2.append(td7)
        trr.append(tr2)
        table.append(tr2)
    }
}

function create_str(){
    let th_name = document.getElementById("nname")
    let  th_pname = document.getElementById("pname")
    let  th_lname = document.getElementById("lname")
    let th_data = document.getElementById("dataa")
    let th_dOb = document.getElementById("dOb")
    let th_fa = document.getElementById("fa")
    
  

    console.log(JSON.parse(localStorage.getItem("table")))
    console.log("")
    if(JSON.parse(localStorage.getItem("table"))==null){
        localStorage.setItem("table", JSON.stringify(app))
        //    let table = document.getElementsByClassName("table")
        app = JSON.parse(localStorage.getItem("table"))
        for(let i = 0;i<app.length; i++){
            let a=createTable(i,app)
            console.log("aaaa")
            console.log(a)
            createNable_zn(a.name,a.lName,a.patrName,a.date,a.nac_ob,a.facul,app)
            
        }
    }
    else{
        app = JSON.parse(localStorage.getItem("table"))
        for(let i = 0;i<app.length; i++){
            let a=createTable(i,app)
            console.log("aaaa")
            console.log(a)
            createNable_zn(a.name,a.lName,a.patrName,a.date,a.nac_ob,a.facul,app)
            
        }
    }

    let in_name = document.getElementById("name")
    let in_lname=document.getElementById("in_s_name")
    let pNane=document.getElementById("in_p_name")
    let date=document.getElementById("date")
    let date_nach=document.getElementById("date_ob")
    let facult =document.getElementById("fac")
    let but = document.getElementById("button")
    date.addEventListener("input",()=>{
        if(date.value.length == 2){
            date.value = date.value +"."
        }
        if(date.value.length == 5){
            date.value = date.value +"."
        }
        if(date.value.length == 10){
            date.disabled = true
        }
    })
    date_nach.addEventListener("input",()=>{
        if(date_nach.value.length == 4){
            date_nach.disabled = true
        }
    })
    but.addEventListener("click",()=>{
        if( in_name.value == "" || in_lname.value  == ""|| pNane.value  == ""|| date.value  == ""|| date_nach.value  == ""|| facult.value == ""){
            date_nach.disabled = false
            date.disabled = false
            alert("Пожалуйста заполните все поля")
        }
        if(typeof in_name.value != 'string' ){
            alert("Имя введите БУКВАМИ")
        }
        if(typeof in_lname.value != 'string'){
            alert("Фамилия введите БУКВАМИ")
        }
        if(typeof pNane.value != 'string'){
            alert("Отчество введите БУКВАМИ")
        }
        if(date_nach.value.length != 4){
            alert("Введите дату начала обучения правильно")
        }
        if(date_nach.value.length != 4){
            alert("Введите дату начала обучения правильно")
        }
        else{
            cr_localStor(in_name.value,in_lname.value,pNane.value,date.value.slice(0,2),date.value.slice(3,5),date.value.slice(6,10),date_nach.value,facult.value)
            // chislo,_mes,_year,  earOb,facul
            createNable_zn(in_name.value,in_lname.value,pNane.value,date.value,date_nach.value,facult.value,app)
            in_name.value = "" 
            in_lname.value  = ""
            pNane.value  = ""
            date.value  = ""
            date_nach.value  = ""
            facult.value = ""
            app = JSON.parse(localStorage.getItem("table"))


        }
        

    })
    let d = 0
    th_name.addEventListener("click",()=>{
        if(d == 0){
            d = 1   
               let mas = app.sort((a,b)=>{
                   if(a._name < b._name) return -1
                   if(a._name> b._name) return 1
               })
               console.log(mas)
               crTabl2(mas)
           }  
           else{
               d = 0
               trr.remove()
               console.log("jjjjjjjjjjjjjjjjjjjjjjjjjj")
               window.location.reload ()
           }
    })
    th_pname.addEventListener("click",()=>{
        if(d == 0){
            d = 1   
           
         
           
            console.log("sdgsdrger")
               let mas = app.sort((a,b)=>{
                   if(a._lastname < b._lastname) return -1
                   if(a._lastname> b._lastname) return 1
               })
               console.log(mas)
               crTabl2(mas)
           }  
           else{
               d = 0
               trr.remove()
               console.log("jjjjjjjjjjjjjjjjjjjjjjjjjj")
               window.location.reload ()
           }
           
       })
       th_lname.addEventListener("click",()=>{
        if(d == 0){
            d = 1   
           
         
           
            console.log("sdgsdrger")
               let mas = app.sort((a,b)=>{
                   if(a._patronymic < b._patronymic) return -1
                   if(a._patronymic> b._patronymic) return 1
               })
               console.log(mas)
               crTabl2(mas)
           }  
           else{
               d = 0
               trr.remove()
               console.log("jjjjjjjjjjjjjjjjjjjjjjjjjj")
               window.location.reload ()
           }
           
       })
       th_data.addEventListener("click",()=>{
        if(d == 0){
            d = 1   
           
         
           
            console.log("sdgsdrger")
                let mas = app.sort((a,b)=>{
                    if(a._data.year < b._data.year) return -1
                    if(a._data.year> b._data.year) return 1
                    if(a._data.year = a._data.year){
                        if(a._data.mas < ba._data.mas) return -1
                        if(a._data.mas > ba._data.mas) return 1
                        if(a._data.mas = ba._data.mas){
                            if(a._data.chislo < ba._data.chislo) return -1
                            if(a._data.chislo > ba._data.chislo) return 1
                        }
                    }
               })
               console.log(mas)
               crTabl2(mas)
           }  
           else{
               d = 0
               trr.remove()
               console.log("jjjjjjjjjjjjjjjjjjjjjjjjjj")
               window.location.reload ()
           }
           
       })
       th_dOb.addEventListener("click",()=>{
        if(d == 0){
            d = 1   
           
         
           
            console.log("sdgsdrger")
                let mas = app.sort((a,b)=>{
                    if(a._nachOb < b._nachOb) return -1
                    if(a._nachOb > b._nachOb) return 1
                    
               })
               console.log(mas)
               crTabl2(mas)
           }  
           else{
               d = 0
               trr.remove()
               console.log("jjjjjjjjjjjjjjjjjjjjjjjjjj")
               window.location.reload ()
           }
           
       })
       th_fa.addEventListener("click",()=>{
        if(d == 0){
            d = 1   
           
         
           
            console.log("sdgsdrger")
                let mas = app.sort((a,b)=>{
                    if(a._facult < b._facult) return -1
                    if(a._facult > b._facult) return 1
                    
               })
               console.log(mas)
               crTabl2(mas)
           }  
           else{
               d = 0
               trr.remove()
               console.log("jjjjjjjjjjjjjjjjjjjjjjjjjj")
               window.location.reload ()
           }
           
       })


   
}