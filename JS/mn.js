let name = ['Anton','Blada','Ksusha','Dima']
let evaluations = [50,70,85,100]



let i = 0



for  (i in evaluations) {

    if  (evaluations [i]<60){
        let otv = "F"
        console.log(name [i], otv )    
    }
    else if (evaluations [i]<70){
        let otv = "D"
        console.log(name [i], otv )
    }
    else if (evaluations [i]<80){
        let otv = "C"
        console.log(name [i], otv )
    }
    else if (evaluations [i]<90){
        let otv = "B"
        console.log(name [i], otv )
    }
    else if(evaluations[i]<=100){
        let otv = "A"
        console.log(name[i], otv )
    }
    

}
let sum =0
for (let a = 0; a< evaluations.length;a++){
    sum += evaluations[a]
}
console.log(sum/(evaluations).length)
