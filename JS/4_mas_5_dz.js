let mas = [1,2,3,4,0,9,7,5,10,15]
let a = []


for (let i = 0; i<mas.length; i++){
    if (mas[i]<mas[i+1]&&mas[i]<mas[i+2]&&mas[i]<mas[i+3]&&mas[i]<mas[i+4]&&mas[i]<mas[i+5]&&mas[i]<mas[i+6]&&mas[i]<mas[i+7]&&mas[i]<mas[i+8]){
       a.splice(i,0,mas[i])
    }
    else{
        a.splice(i+1,0,mas[i])
    }
}
console.log(a)
