function agePeople(age){
    if(age<18){
        console.log(age, "ребенок")  
    }
    else if(age<31){
        console.log(age, "молодой,")
    }
    else if(age<56){
        console.log(age,  "зрелый,")
    }
    else if(age>55){
        console.log(age, "старый")
    }
}

for (let age = 0; age< 101;age++){
    agePeople(age)
}