let dniNed = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье']
let pervDnNed = 'среда'

let tekDen = dniNed.indexOf(pervDnNed) -1



for(let i = 1; i<31 ; i++){
    if (tekDen==6){
        tekDen = -1
    }
    tekDen +=1
    console.log(`${i} января,${dniNed[tekDen]}`)
    }
    


    
