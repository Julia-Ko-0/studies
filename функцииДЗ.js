function vozrast(age){
    for (let age = 0; age <101; age++){
        if (age<=17){
            console.log(age + ' ребенок')
        }
        else if (age <=30 ){
            console.log(age + ' молодой')
        }
        else if (age <=55 ){
            console.log(age + ' зрелый')
        }
        else if (age>55 ){
            console.log(age + ' старый')
        }
        

    }
}

vozrast()