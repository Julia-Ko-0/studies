const menu = document.querySelector(".cards-restaurants")


const  renderItem = (date)=>{
    date.forEach(({name,time_of_delivery,stars,price,kitchen,image,products} )=> {
       let a = document.childElement('a')
       a.setAttribute('href','/restaurant.html')
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
fetch('./db/partners.json').then((response)=> response.json()).then((date)=>{
    renderItem(date)
}).catch((error)=>{
    
})