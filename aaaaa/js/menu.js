let selector = document.querySelector('.section-heading')
let rest =  new URLSearchParams(location.search).get("page")
const menu = document.querySelector('.cards-menu')
let masiv =[]

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
   
});

fetch(`https://tast-b6a5a-default-rtdb.firebaseio.com/db/${rest}`,{method:"GET"})
.then((res)=>res.json())
.then((date)=>{
    crMenu(date)
    
});

