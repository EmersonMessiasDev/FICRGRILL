//const product = []
editId = null
let product = JSON.parse(localStorage.getItem("product") || "[]")
function cadastrar() {
    //prodCadastrados.style.display = "block"
    
    let inIdProduto = document.getElementById("inIdProduto").value
    let inProduto = document.getElementById("inProduto").value
    let inPreco = document.getElementById("inPreco").value
    const novoItem = {}
    
    if (inIdProduto != "" && inProduto != "" && inPreco != "") {
        if (document.getElementById("btnCadastrar").value != "Atualizar") {
            novoItem = {
                id: inIdProduto,
                produto: inProduto,
                preco: inPreco
            }
            
            product.push(novoItem)
            window.localStorage.product = JSON.stringify(product)
        }else{
            alert("entrou")
            atualizar(novoItem)
        }
    }
    mostraLista()
    inIdProduto.valeu = ""
    inProduto.value = ""
    inPreco.value = ""

}
var btnCadastrar = document.getElementById("btnCadastrar")
btnCadastrar.addEventListener("click",cadastrar)

function cancelar() {
    document.getElementById("inIdProduto").value = ""
    document.getElementById("inProduto").value = ""
    document.getElementById("inPreco").value = ""
}
var btnCancelar = document.getElementById("btnCancelar")
btnCancelar.addEventListener("click",cancelar)

function mostraLista() {
    prodCadastrados.style.display = "block"
    let tbody = document.getElementById("tbody")
    tbody.innerText = ""
    for(let i=0; i< product.length; i++){
        let tr = tbody.insertRow();

        let td_id = tr.insertCell()
        let td_produto = tr.insertCell()
        let td_preco = tr.insertCell()
        let td_acao = tr.insertCell()

        td_id.innerText = product[i].id
        td_produto.innerText = product[i].produto
        td_preco.innerText = product[i].preco
        
        td_id.classList.add("center")

        let imgEdit = document.createElement("img")
        imgEdit.src = "assets/img/edit.png"
        imgEdit.setAttribute("onclick", "edicao("+JSON.stringify(product[i])+")")

        let imgDel = document.createElement("img")
        imgDel.src = "assets/img/del.png"
        imgDel.setAttribute("onclick", "deletar("+product[i].id+")")

        td_acao.appendChild(imgEdit)
        td_acao.appendChild(imgDel)

    }   
}

function atualizar(id,novoItem){
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == id) {
            product[i].id = novoItem.id
            product[i].produto = novoItem.produto
            product[i].preco = novoItem.preco
            btnCadastrar.setAttribute("value","Cadastrar")

        }
        
    }
}

function edicao(dados) {
    editId = dados.id
    document.getElementById("inIdProduto").value = dados.id
    document.getElementById("inProduto").value = dados.produto
    document.getElementById("inPreco").value = dados.preco
    btnCadastrar.innerText = "Atualizar"
    btnCadastrar.setAttribute("value","Atualizar")
}


function deletar(id) {
    if (confirm("Deseja realmente deletar o produto de ID: "+ id)) {
        let tbody = document.getElementById("tbody")
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == id) {
            product.splice(i,1)
            tbody.deleteRow(i)
        }
        
    }
    }

    
}