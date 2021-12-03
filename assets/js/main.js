let btnSenha = document.querySelector("#verSenha")

btnSenha.addEventListener("click",()=>{
    let inputsenha = document.querySelector("#senha")
    
    if(inputsenha.getAttribute("type") == "password"){
        inputsenha.setAttribute("type", "text")
    }else{
        inputsenha.setAttribute("type", "password")
    }

})

let btnConfSenha = document.querySelector("#verConfSenha")

btnConfSenha.addEventListener("click",()=>{
    let confsenha = document.querySelector("#confirmSenha")
    
    if(confsenha.getAttribute("type") == "password"){
        confsenha.setAttribute("type", "text")
    }else{
        confsenha.setAttribute("type", "password")
    }

})

let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")
let validNome = false

let usuario = document.querySelector("#usuario")
let labelUsuario = document.querySelector("#labelUsuario")
let validUsuario = false

let senha = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")
let validSenha = false

let confirmSenha = document.querySelector("#confirmSenha")
let labelconfirmSenha = document.querySelector("#labelconfirmSenha")
let validconfirmSenha = false

nome.addEventListener("keyup", ()=>{
    if (nome.value.length < 3) {
        labelNome.setAttribute("style", "color: red")
        labelNome.innerHTML = "Nome *Insira no mínimo 3 caracteres"
        nome.setAttribute("style", "border-color: red")
        validNome = false
    } else {
        labelNome.setAttribute("style", "color: green")
        labelNome.innerHTML = "Nome"
        nome.setAttribute("style", "border-color: green")
        validNome = true
    }
})

usuario.addEventListener("keyup", ()=>{
    if (usuario.value.length < 5) {
        labelUsuario.setAttribute("style", "color: red")
        labelUsuario.innerHTML = "Usuário *Insira no mínimo 5 caracteres"
        usuario.setAttribute("style", "border-color: red")
        validUsuario = false
    } else {
        labelUsuario.setAttribute("style", "color: green")
        labelUsuario.innerHTML = "Usuário"
        usuario.setAttribute("style", "border-color: green")
        validUsuario = true
    }
})


senha.addEventListener("keyup", ()=>{
    if (senha.value.length < 6) {
        labelSenha.setAttribute("style", "color: red")
        labelSenha.innerHTML = "Senha *Insira no mínimo 6 caracteres"
        senha.setAttribute("style", "border-color: red")
        validSenha = false
    } else {
        labelSenha.setAttribute("style", "color: green")
        labelSenha.innerHTML = "Senha"
        senha.setAttribute("style", "border-color: green")
        validSenha = true
    }
})

confirmSenha.addEventListener("keyup", ()=>{
    if (senha.value != confirmSenha.value) {
        labelconfirmSenha.setAttribute("style", "color: red")
        labelconfirmSenha.innerHTML = "Confirmar senha *As senhas não conferem"
        confirmSenha.setAttribute("style", "border-color: red")
        validconfirmSenha = false
    } else {
        labelconfirmSenha.setAttribute("style", "color: green")
        labelconfirmSenha.innerHTML = "Confirmar senha"
        confirmSenha.setAttribute("style", "border-color: green")
        validconfirmSenha = true
    }
})

let msgError = document.querySelector("#msgError")
let msgSucess = document.querySelector("#msgSucess")

function cadastrar() {
    if (validNome && validUsuario && validSenha && validconfirmSenha) {
        let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")
        

        let verifUsuario = []
        for (let i = 0; i < listaUser.length; i++) {
            
            verifUsuario[i] = listaUser[i].userCad
        }

        if (verifUsuario.indexOf(usuario.value) != -1) {
            alert("Usuário já existe. Escolha outro Usuário.")
            labelUsuario.focus()
            return
        } else {
            listaUser.push(
                {
                    nomeCad: nome.value,
                    userCad: usuario.value,
                    senhaCad: senha.value
                }
            )
    
            localStorage.setItem("listaUser", JSON.stringify(listaUser))
            
            msgSucess.setAttribute("style", "display: block")
            msgSucess.innerHTML = "<strong>Cadastrando usuário...</strong>"
            msgError.setAttribute("style", "display: none")
            msgError.innerHTML = ""
            
            setTimeout(()=>{
                window.location.href = "login.html"
            },3000)
        }

    } else {
        msgError.setAttribute("style", "display: block")
        msgError.innerHTML = "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>"
        msgSucess.innerHTML = ""
        msgSucess.setAttribute("style", "display: none")
    }
}
var btnCadastrar = document.getElementById("btnCadastrar")
btnCadastrar.addEventListener("click",cadastrar)