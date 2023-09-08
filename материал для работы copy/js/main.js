const butAut = document.querySelector('.button-auth')
const modalAut = document.querySelector('.modal-auth')
const loForm = document.getElementById('logInForm')
const butExit = document.querySelector('.close-auth')
const inpLog = document.getElementById("login")
const inpPas = document.getElementById("password")
const checkMark = document.getElementById("checkMark")
const userName = document.getElementById('user-name')
let mas = []
butAut.addEventListener('click',() => {
    modalAut.style.display = 'flex'
})

butExit.addEventListener('click',()=>{
    console.log('exit')
    modalAut.style.display = 'none'
})

loForm.addEventListener("submit",(a)=>{
    a.preventDefault()
    console.log(inpLog.value , inpPas.value)
    console.log(checkMark.checked)
    if(checkMark.checked){
        saveUser(inpLog.value , inpPas.value)
    }
    
    modalAut.style.display = 'none'
})
if (localStorage.getItem("user")){
    mas = JSON.parse(localStorage.getItem("user"))

    console.log(mas[0].log)
    userName.value = mas[0].log
    userName.style.display = "block"

}
function saveUser(userLog,userPas){
    mas.push ({log:userLog,pas:userPas})
    localStorage.setItem("user", JSON.stringify(mas))
}