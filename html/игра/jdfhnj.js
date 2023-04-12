// function createElement(mas1){

   
//     // let chislo = Math.floor( Math.random() * (4 - 1)+1)
//     while(mas1.length <4  ){
//         let chislo = Math.floor( Math.random() * (5 - 1)+1)
        
//         if(mas1.includes(chislo) == true){
            
//         }
//         else{
//             mas1.push(chislo)
//             console.log(mas1 , mas1.length)
//         }
       
//     }
//     console.log(mas1)
// }
function createElement(mas1,mas2){
  
    // let chislo = Math.floor( Math.random() * (4 - 1)+1)
    while(mas1.length<4 && mas2.length<4 ){
        let chislo = Math.floor( Math.random() * (4 - 1)+1)
        if(mas1.includes(chislo) !== true){
            mas1.push(chislo)
        }
        else if (mas2.includes(chislo) !== true){
            mas2.push(chislo)
        }    
    }
    // while(mas1.length<4 && mas2.lastIndexOf<4 ){
    //     let chislo = Math.floor( Math.random() * (4 - 1)+1)
    //     if(mas2.includes(chislo)){
    //     }
    //     else {
    //         mas2.push(chislo)
    //     }    
    // }

    console.log(mas1,mas2)
}
