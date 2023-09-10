// const butAut = document.querySelector('.button-auth')
// const modalAut = document.querySelector('.modal-auth')
// const loForm = document.getElementById('logInForm')
// const butExit = document.querySelector('.close-auth')
// const inpLog = document.getElementById("login")
// const inpPas = document.getElementById("password")
// const checkMark = document.getElementById("checkMark")
// const userName = document.querySelector('.user-name')
// const exitBtn = document.querySelector(".button-out")
// const cart = document.getElementById("cart-button")
// const modalCart = document.querySelector(".modal-cart")
// let mas = []
// const exitBtnCars = document.querySelector(".close")
// butAut.addEventListener('click',() => {
//     modalAut.style.display = 'flex'
// })

// butExit.addEventListener('click',()=>{
//     console.log('exit')
//     modalAut.style.display = 'none'
// })

// loForm.addEventListener("submit",(a)=>{
//     a.preventDefault()
//     if(inpLog.value == ''){
      
//     }
//     loginOut(inpLog.value)
//     if(checkMark.checked){
//         saveUser(inpLog.value , inpPas.value)
//     }
//     modalAut.style.display = 'none'
// })
// if (localStorage.getItem("user")){
//     mas = JSON.parse(localStorage.getItem("user"))
//     console.log(mas[0].log)
        
//     loginOut(mas[0].log)
   
// }
// function saveUser(userLog,userPas){
//     mas.push ({log:userLog,pas:userPas})
//     localStorage.setItem("user", JSON.stringify(mas))
// }
// function loginOut(logUser){
//     userName.style.display = "block"
//     cart.style.display = "block"
//     butAut.style.display = "none"
//     exitBtn.style.display = "block"
//     userName.textContent = logUser
// }
// exitBtn.addEventListener("click",()=>{
//     console.log("gh")
//     butAut.style.display = "block"
//     userName.style.display = "none"
//     exitBtn.style.display = "none"
//     cart.style.display = "none"
//     localStorage.removeItem("user")
// })
// cart.addEventListener("click",()=>{
//     modalCart.style.display = "flex"
// })
// exitBtnCars.addEventListener("click",()=>{
//     modalCart.style.display = "none"
// })