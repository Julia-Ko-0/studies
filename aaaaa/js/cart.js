const carsMenu = document.querySelector(".modal-body")
let usName = document.querySelector('.user-name')
let priceCard = document.querySelector('.modal-pricetag')
let btnZK = document.querySelector('.btnZK')
btnZK.addEventListener('click',()=>{
    if(confirm("fdg")){
        let arr = JSON.parse(localStorage.getItem(`card${usName.textContent}`))
        serv(arr)
        localStorage.removeItem(`card${usName.textContent}`)
        let fr = document.querySelectorAll('.food-row')
        for(let i in fr){
            console.log(fr[i])
            fr[i].remove()
        }
        
    }
})
// function serv(arrey){
//     fetch("https://tast-b6a5a-default-rtdb.firebaseio.com/db/",{
//         method:"POST",
//         body:JSON.stringify({arrey})
//     })
// }
function serv(arrey){
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body:JSON.stringify({arrey})
    }).then(res=>{
        if(res.ok){
            console.log("ok")
        }
    })
}
function crCors(name,price,quantity){
    let cr = document.createElement('div')
    cr.classList.add('food-row')
    cr.innerHTML=`
					<span class="food-name">${name}</span>
					<strong class="food-price">${price}</strong>
					<div class="food-counter">
						<button class="counter-button button-" >-</button>
						<span class="counter quan">${quantity}</span>
						<button class="counter-button butt">+</button>
					</div>
				`
    carsMenu.append(cr)
    priceCard.textContent = Number(priceCard.textContent) + (price * quantity)
    cr.querySelector('.button-').addEventListener('click',()=>{
        cr.querySelector('.quan').textContent--
        if(cr.querySelector('.quan').textContent == 0){
            console.log("dsada")
            cr.remove()
        }
        masiv = JSON.parse(localStorage.getItem(`card${usName.textContent}`))
        for(let i = 0;i<masiv.length ;i++){
            if(masiv[i].name == name){
                masiv[i].quantity--
                priceCard.textContent = Number(priceCard.textContent) - (price)
                if(masiv[i].quantity == 0){
                    masiv.splice(i,1,)
                    
                }
                localStorage.setItem(`card${usName.textContent}`, JSON.stringify(masiv))
                
            }
        }
    })
    cr.querySelector('.butt').addEventListener('click',()=>{
        cr.querySelector('.quan').textContent++
        masiv = JSON.parse(localStorage.getItem(`card${usName.textContent}`))
        for(let i = 0;i<masiv.length ;i++){
            if(masiv[i].name == name){
                masiv[i].quantity++
                priceCard.textContent = Number(priceCard.textContent) + (price)
                localStorage.setItem(`card${usName.textContent}`, JSON.stringify(masiv))
                
            }
        }
    })

}
if (localStorage.getItem(`card${usName.textContent}`)){
    console.log("asdasdfasdf")
    masiv = JSON.parse(localStorage.getItem(`card${usName.textContent}`))
    for(let i in masiv) {
        crCors(masiv[i].name,masiv[i].price,masiv[i].quantity)
    }
       

}
function cardAdd(name,price,quantity){
    let quan = document.querySelectorAll('.quan')
    let food_name = document.querySelectorAll('.food-name')
    if (localStorage.getItem(`card${usName.textContent}`)){
        masiv = JSON.parse(localStorage.getItem(`card${usName.textContent}`))
        console.log(masiv)
        for(let i = 0;i<masiv.length;i++){
            if(masiv[i].name == name){
                masiv[i].quantity++
                localStorage.setItem(`card${usName.textContent}`, JSON.stringify(masiv))
                console.log(food_name)
                for(let p = 0;p<food_name.length;p++){
                    console.log("[pweor")
                    if(food_name[p].textContent == name){
                        console.log(quan[p])
                        quan[p].textContent++
                    }
                }
                return   
            }
        }
       
    }
    masiv.push({name:name,price:price,quantity:quantity})
        localStorage.setItem(`card${usName.textContent}`, JSON.stringify(masiv))
        crCors(name,price,"1")
}
