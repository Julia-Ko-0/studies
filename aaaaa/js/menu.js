let selector = document.querySelector('.section-heading')
let rest =  new URLSearchParams(location.search).get("page")
const menu = document.querySelector('.cards-menu')
let masiv =[]
let usName = document.querySelector('.user-name')
let priceCard = document.querySelector('.modal-pricetag')
let btnZK = document.querySelector('.btnZK')

btnZK.addEventListener('click',()=>{
    if(confirm("fdg")){
        localStorage.removeItem(`card${usName.textContent}`)
    }
})
const carsMenu = document.querySelector(".modal-body")
function crHeading(date){
    for(let i = 0; i<date.length;i++){
        if (date[i].products == rest){
            console.log(date[i].name)
            selector.innerHTML=
            `<h2 class="section-title restaurant-title">${date[i].name}</h2>
            <div class="card-info">
                <div class="rating">${date[i].stars}</div>
                <div class="price">От${date[i].price}</div>
                <div class="category">${date[i].kitchen}</div>
            </div>`
        }
    } 
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
        masiv = JSON.parse(localStorage.getItem(`card${usName.textContent}`))
        for(let i = 0;i<masiv.length ;i++){
            if(masiv[i].name == name){
                masiv[i].quantity--
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
    if (localStorage.getItem(`card${usName.textContent}`)){
        masiv = JSON.parse(localStorage.getItem(`card${usName.textContent}`))
        console.log(masiv)
        for(let i = 0;i<masiv.length;i++){
            if(masiv[i].name == name){
                masiv[i].quantity++
                localStorage.setItem(`card${usName.textContent}`, JSON.stringify(masiv))
             return   
            }
        }
       
    }
    masiv.push({name:name,price:price,quantity:quantity})
        localStorage.setItem(`card${usName.textContent}`, JSON.stringify(masiv))
        crCors(name,price,"1")
}
console.log(rest)

function crMenu(date){
    date.forEach(({name,description,price,image}) => {
        let a = document.createElement('div')
        a.classList.add('card')
        a.innerHTML = 
        `<img src=${image} alt=${name} class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title card-title-reg">${name}</h3>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
                <div class="ingredients">${description}
                </div>
            </div>
            <!-- /.card-info -->
            <div class="card-buttons">
                <button class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">${price}</strong>
            </div>
        </div>`
        menu.append(a)
        a.querySelector('.button-add-cart').addEventListener('click',()=>{
            cardAdd(name,price,"1",usName.textContent)
        })
    });
}
fetch(`https://tast-b6a5a-default-rtdb.firebaseio.com/db/partners.json`,{method:"GET"})
.then((res)=>res.json())
.then((date)=>{
    crHeading(date)
    console.log(date)
});

fetch(`https://tast-b6a5a-default-rtdb.firebaseio.com/db/${rest}`,{method:"GET"})
.then((res)=>res.json())
.then((date)=>{
    crMenu(date)
});

