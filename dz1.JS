let x = 333
let x1 = Math.floor(x/100)
let x2 = Math.floor(x/10-(x1*10))
let x3 =Math.floor(x- Math.floor(x/10)*10)
console.log('Сумма: ',x1+x2+ x3)
console.log('Произведение: ',x1*x2*x3)