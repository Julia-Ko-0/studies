let roadMines = [false, 4>5 , true,false, 4>5 , true,false, 4>5 , true]
let a = 1

for(let i= 0 ; i <roadMines.length; i++){

    if (roadMines[i] == true){
        
        if(a == 1){
            console.log("танк повреждён")
            a +=1
        }
        else if(a == 2){
            console.log("танк уничтожен")
            return
        }
    }
    else{
        console.log(`танк переместился на ${i+1}`)
    }
}