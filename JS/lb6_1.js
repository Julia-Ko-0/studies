let objects = [
    { name:'Василий', surname:'Васильев' },
    { name:'Иван' , surname:'Иванов'},
    { name:'Пётр' , surname:'Петров' }
]
// function filter(nzObg, _nzSv, Svoistvo){
//     for(let i in nzObg){
//         if(nzObg[i].nzSv == Svoistvo){
//             console.log(nzObg[i])
//         }
//     }
// }
function filter (obj, name, nazv){
    
    for(let i in obj){
        if (obj[i].name == nazv){
            console.log(obj[i])
        }
    }
}
filter(objects,"name",'Иван')
