let app = [
    {
        _name : 'Kola',
        _lastname:'Ivanov',
        _patronymic:'Petrov',
        _data:"01.05.2000",
        _nachOb:"02.10.2017"
    },
    {
        _name:'Ola',
        _lastname:'Ivanova',
        _patronymic:'Petrov',
        _data:"01.05.2002",
        _nachOb:"09.07.2017"
    },
    {
        _name:'Ivan',
        _lastname:'Kyznecov',
        _patronymic:'Grishin',
        _data:"01.05.2003",
        _nachOb:"07.11.2020"
    }
]
// let app = [
//     {
//         _name:name,
//         _lastname:lastname,
//         _patronymic:patronymic
//     }
// ]
// let table = document.createElement('table')
// let thead = document.createElement('thead')
// let tr = document.createElement('tr')
// let tbody = document.createElement('tbody')
// let conteiner = document.getElementById('container')
// conteiner.append(table)
// table.append(thead)
// table.append(tbody)
// thead.append(th)

function createTablBody(i){
    
        let obj = app[i]
        let name = obj._name
        let lName = obj._lastname
        let patrName = obj._patronymic
        
        return{

            name,
            lName,
            patrName
        }
}
function createTable_vn (name,sname,pname){
     let td1 = document.createElement('td')
     let td2 = document.createElement('td')
     let td3 = document.createElement('td')
     let tr = document.createElement('tr')
    td1.innerHTML = name
    td2.innerHTML = sname
    td3.innerHTML = pname
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    return tr
}

let heading = document.createElement('h1')
heading.innerHTML = 'mkvmldk'
function createTable(){
 
        let conteiner = document.getElementById('container')
        conteiner.append(heading)
        let table = document.createElement('table')
        let thead = document.createElement('thead')
        let tr1 = document.createElement('tr')
        let tbody = document.createElement('tbody')

       
        
        table.appendChild(thead)
        table.appendChild(tbody)
        table.append(tr1)
        

        let head1 = document.createElement('th')
        head1.innerHTML = "Name"
        thead.appendChild(tr1)
        tr1.appendChild(head1)
        for(let i = 0; i<app.length;i++){
           
            let name = createTable_vn(createTablBody(i).name,createTablBody(i).lName,createTablBody(i).patrName)
            tbody.appendChild(name)
        }
        // let name = createTable_vn(createTablBody(1).name,createTablBody(1).lName,createTablBody(1).patrName)
        // thead.appendChild(tr1)
        // tr1.appendChild(head1)
        // tbody.appendChild(name)
        

     


        let head2 = document.createElement('th')
        head2.innerHTML = "LastName"
        // let lname = createTable_vn(createTablBody(1).lName)
        thead.appendChild(tr1)
        tr1.appendChild(head2)
        // tbody.appendChild(lname)

        let head3 = document.createElement('th')
        head3.innerHTML = "Patronymic"
        // let prname = createTable_vn(createTablBody(1).patrName)
        thead.appendChild(tr1)
        tr1.appendChild(head3)
        // tbody.appendChild(prname)

        let head4 = document.createElement('th')
        let head5 = document.createElement('th')
        let head6 = document.createElement('th')
        conteiner.appendChild(table)
       
     
        

    // conteiner.append(table)
    // table.append(thead)
    // table.append(tbody)
    // thead.append(th)
    // let head1 = document.createElement('th')
    // head1.innerHTML = "Name"
    // tr.append(head1)
    // let head2 = document.createElement('th')
    // head2.innerHTML = "LastName"
    // tr.append(head2)
    // let head3 = document.createElement('th')
    // let head4 = document.createElement('th')
    // let head5 = document.createElement('th')
    // let head6 = document.createElement('th')

    // for (let i in app){
    //     let obj = app[i]
    //     obj._name
    // }
}