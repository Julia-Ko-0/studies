let a1 = 12.123
let b1 = 23.442
let n = 2

let a2 = (a1 - Math.floor(a1))
let b2 = (b1 - Math.floor(b1))
let a = Math.round(a2*10**n)
let b = Math.round(b2*10**n)
console.log ('Fractional part of numbers: ', a, b)
console.log ('a > b: ', a > b)
console.log ('a < b: ', a < b)
console.log ('a <= b: ',a <= b)
console.log ('a >= b: ', a >= b)
console.log ('a === b: ',a === b)
console.log ('a !== b: ',a !== b)