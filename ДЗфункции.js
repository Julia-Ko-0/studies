function proverka(number) {
    console.log('числа от 0 да 10: ');
    let found = false;
    let mas =[];
    for (let goodnum of number) {
        if (goodnum < 10 ) {
            mas.push(goodnum);
            found = true;
           
        }
    }
    console.log(found ? mas : 'ytn nfrb[');
}
let number = ['1', '2', '10', '11', '1'];
proverka(number)
