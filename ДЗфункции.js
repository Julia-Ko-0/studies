function proverka(number) {
    console.log('числа от 0 да 10: ');
    let found = false;

    for (let goodnum of number) {
        if (goodnum < 10 ) {
            found = true;
            break;
        }
    }
    console.log(found ? number : 'ytn nfrb[');
}
let number = ['1', '2', '10', '11', '1'];
function proverka(number)
