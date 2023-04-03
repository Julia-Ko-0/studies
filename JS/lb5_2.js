let sum = 234234
let products = 15
let prom = "ДАРИМ300"

function calculate(sum, products, prom = null) {
  if (prom === "ДАРИМ300") {
        sum = sum - 300
        if (sum < 0) {
            sum = 0
        }
  }

  if (products >= 10) {
        sum = sum - (sum / 100) * 15
  }

  if (sum > 50000) {
        sum = sum - ((sum - 50000) / 100) * 20
  }

  if (prom == "СКИДКА15" && sum >= 20000) {
        sum = sum - (sum / 100) * 15
  }

  return Math.floor(sum)
}

console.log(calculate(sum, products, prom))
