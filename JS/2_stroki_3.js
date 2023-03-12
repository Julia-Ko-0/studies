let stroka = 'klsgjeriyg r hsde '
maxlenght = 15

let kolvoSlov = stroka.length

if (kolvoSlov > maxlenght){
    let it = stroka.substr(0,maxlenght-3)
console.log(it+"...")
}
else{
    console.log(stroka)
}

