// function ochishMas(mas){
//     if(mas !== false && mas !== undefined && mas !== " " && mas !== 0 && mas !== null){
//        let newMas = []
//        newMas.push(mas) 
//     }
// }

let mas = [4," ",null, false , 2,12,24,0,-32,-1,-1,34,0]
for (i=0; i < mas.length ; i++){
    ochishMas(mas[i])

}
console.log(massiv)


function ochishMas(a){
    massiv = []
    if(a !== false && a !== undefined && a !== " " && a !== 0 && a !== null){
      massiv.push(a)
    }
}

// const array = [1, null, "2", null, null, 3.0]
// const array2 = array.filter(ochishMas);
// console.log(array);


// const array = [1, null, "2", null, null, 3.0]
// const array2 = array.filter(element => element !== null);
// console.log(array2);