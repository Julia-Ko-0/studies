let userd = [
    {
        name:"Оля",
        login:"Ola123",
        posword:"12345"
    },
    {
        name:"Коля",
        login:"kola123",
        posword:"67890"
    },
    {
        name:"Петя",
        login:"Peta123",
        posword:"13524"
    },
    {
        name:"Толя",
        login:"Tola123",
        posword:"13579"
    },
]
// function cr_doc(){
//     let login = prompt("login?")
//     let posword = prompt("pasword?")
//     for(let i = 0; i<userd.length;i++){
//         if(userd[i].login == login){
//             if(userd[i].posword == posword){
//                 alert(`Привет ${userd[i].name}`)
//                 return
//             }
//             else{
//                 alert("пороль не верный")
//                 return
//             }
//         }
//     }
//     alert("такого пользователя нет")
    
// }
function cr_doc(){
    let num_bot = Math.floor(Math.random() * (5)) 
    console.log(num_bot)
    let num = prompt("number? from 0 to 5")
    // if(parseInt (num) ){
    //     alert("Введите число")
    // }
    while(num != num_bot && num != null){
        if(num<num_bot){
            alert("больше")
        }
        if(num>num_bot){
            alert("меньше")}
        num = prompt("number? from 0 to 5")
    }
    if(num == null){
        alert("not win")
    }
    if(num == num_bot){
        alert("win")
    }
  
}