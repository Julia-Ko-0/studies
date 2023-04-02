

var Mas = [4," ",null,false,4,2,12,24,0,-32,-1,-1,34]

function isNumberInRange(num) {
	if (num != false && num !=' ' && num != undefined && num != 0 && num !=null ) {
		return true
	} else {
		return false
	}
}
var newMas = []
for (var i = 0; i <= Mas.length; i++) {

	if (isNumberInRange(Mas[i])) {

		newMas.push(Mas[i])

	}
}

console.log(newMas)