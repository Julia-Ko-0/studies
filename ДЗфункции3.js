function negzn (mas){
    
    for (let gdmas of mas){
        if (gdmas == 'false'  ){
           let itog = mas.splice(gdmas,1);
           
        }

    }
    console.log(itog);
}

let mas = ['2','Король', 'Туз', '5', 'Дама', '6', 'Король', 'false'];
negzn (mas)