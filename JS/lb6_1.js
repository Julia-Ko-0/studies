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
function filt (objects, key, nazv){
    for(let i ; i<objects.length;i++){
        if (objects[i].key == nazv){
            console.log(objects[i])
        }
    }
}
filt(objects,"name",'Петр')
