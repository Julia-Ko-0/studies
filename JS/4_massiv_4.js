let mas = "Есть несколько товаров по $120 и $20 и $70 все они крутые"



let a = mas.split("")

for ( let i = 0 ; i <a.length; i++)
{
    if (a[i] == "$"){
        
        let b = a[i+1]
        c = a.indexOf(b)
    

        let it = mas.substr(c)
        for (let z = 0; z<it.length;z++){
            if (it[z]==" "){
                let n = it[z].length
                console.log(it.substr(0,n+2))
                break
            }
        }
        
    }


}


