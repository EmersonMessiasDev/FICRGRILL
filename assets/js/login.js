let btnSenha = document.querySelector("#verSenha")

btnSenha.addEventListener("click",()=>{
    let inputsenha = document.querySelector("#senha")
    
    if(inputsenha.getAttribute("type") == "password"){
        inputsenha.setAttribute("type", "text")
    }else{
        inputsenha.setAttribute("type", "password")
    }

})

function entrar() {
    let usuario = document.querySelector("#usuario")
    let labelUser = document.querySelector("#labelUser")

    let senha = document.querySelector("#senha")
    let labelSenha = document.querySelector("#labelSenha")

    let msgError = document.querySelector("#msgError")
    let listaUser = []

    let userValid = {
        nome: "",
        user: "",
        senha: ""
    }

    listaUser = JSON.parse(localStorage.getItem("listaUser"))

    listaUser.forEach((item) => {
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        window.location.href = "cliente.html"

        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem("token",token)

        localStorage.setItem("userLogado", JSON.stringify(userValid))

    } else {
        labelUser.setAttribute("style", "color: red")
        usuario.setAttribute("style", "border-color: red")
        labelSenha.setAttribute("style", "color: red")
        senha.setAttribute("style", "border-color: red")
        msgError.setAttribute("style", "display: block")
        msgError.innerHTML = "Usuário ou senha incorretos!"
        usuario.focus()
    }

}
var btnEntrar = document.getElementById("btnEntrar")
btnEntrar.addEventListener("click",entrar)