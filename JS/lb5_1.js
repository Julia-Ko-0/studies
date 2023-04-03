const email = ["123mkc.gmail","efefwjg@mail.com" , "efewew.ru","kdsg@gmail.com"]
const emailBl =["efefwjg@mail.com","kdsg@gmail.com"]
let mas = []

function filter(email, emailBl) {
  for (let i = 0; i < email.length; i++) {
    if (emailBl.includes(email[i])) {
      continue
    } else {
      mas.push(email[i])
    }
  }
  return mas
}

console.log(filter(email, emailBl))