let Mas = [4,2,12,24,0,-32,-1,-1,34]

function isNumberInRange(num) {
	if (num >0 && num<10) {
		return true
	} else {
		return false
	}
}
let  newMas = []
for (let i = 0; i <= Mas.length; i++) {

	if (isNumberInRange(Mas[i])) {

		newMas.push(Mas[i])

	}
}

console.log(newMas)