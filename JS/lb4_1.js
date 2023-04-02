let mas = []

let n = 0
let m = 2
let count = 5

for(let i = 0; i <= count; i++){
    let num = (Math.random() * (m - n) + n)
    mas.push(num)
}
console.log(mas)