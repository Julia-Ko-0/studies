const menu = document.querySelector(".cards-restaurants")
let par = "partners"

const  renderItem = (date)=>{
    date.forEach(({name,time_of_delivery,stars,price,kitchen,image,products} )=> {
       let a = document.createElement('a')
       a.setAttribute('href',`./restaurant.html?page=${products}`)
       a.classList.add('card')
       a.classList.add('card-restaurant')
       a.dataset.products = products
       a.innerHTML = 
       `<img src=${image} alt=${name} class="card-image" />
		<div class="card-text">
		    <div class="card-heading">
				<h3 class="card-title">${name}</h3>
				<span class="card-tag tag">${time_of_delivery}</span>
			</div>
			<div class="card-info">
				<div class="rating">
					${stars}
				</div>
			    <div class="price">${price}</div>
		        <div class="category">${kitchen}</div>
		    </div>
		</div>`
        menu.append(a)

    });
}


fetch(`https://tast-b6a5a-default-rtdb.firebaseio.com/db/${par}.json`,{method:"GET"})
.then((res)=>res.json())
.then((date)=>renderItem(date));

let Inp = document.getElementById("input-search")
let app = []
Inp.addEventListener('input', () => {
	let cards = document.querySelectorAll('.card-restaurant')
	// app.append(cards)
	console.log(cards)
	for(let i = 0;i<cards.length;i++){
		
		let nm = document.querySelectorAll('.category')
		if(nm[i].textContent.toLowerCase() != Inp.value){
			cards[i].remove()

		}
	}
	
	// cards.map((app)=>{
	// 	app.fi
	// })
	
//    cards.remove()
//    crHeading(appRes)
})