
let product = JSON.parse(localStorage.getItem("product") || "[]")
editId = null

var btnCadastrar = document.getElementById("btnCadastrar")
btnCadastrar.addEventListener("click",cadastrar)

var btnCancelar = document.getElementById("btnCancelar")
btnCancelar.addEventListener("click",cancelar)

/*função de cadastro*/
function cadastrar() {
    
    let inProduto = document.getElementById("inProduto").value
    let inPreco = document.getElementById("inPreco").value
    
    if (inProduto != "" && inPreco != "") {
        if (editId == null) {

            const verifId = []
           
            for (let i = 0; i < product.length; i++) {
                verifId[i] = Number(product[i].id)
               
            }

            if (product.length == 0) {
                id_prod = 1
            } else {
                id_prod = Math.max(...verifId)+1
            }

            const novoItem = {
                id: id_prod,
                produto: inProduto,
                preco: inPreco
            }            
            product.push(novoItem)
            window.localStorage.product = JSON.stringify(product)
        }else{
            atualizar(editId)
        }
        
    }
    cancelar()
    renderListas()

}
/*função de cadastro*/



/*função de cancelar*/
function cancelar() {
    
    document.getElementById("inProduto").value = ""
    document.getElementById("inPreco").value = ""
}
/*função de cancelar*/

/*função de mostrar lista de produtos*/
function renderListas() {
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
/*função de mostrar lista de produtos*/

/*função de deletar produto*/
function deletar(id) {
    if (confirm("Deseja realmente deletar o produto de ID: "+ id)) {
        let tbody = document.getElementById("tbody")
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == id) {
            product.splice(i,1)
            tbody.deleteRow(i)
        }
        
    }
    window.localStorage.product = JSON.stringify(product)
    }
}
/*função de deletar produto*/

/*função de preparação da adição: adiciona os valores nos input's e muda o nome do botão cadastrar para atualizar*/
function edicao(dados) {
    editId = dados.id
    document.getElementById("inProduto").value = dados.produto
    document.getElementById("inPreco").value = dados.preco
    btnCadastrar.innerText = "Atualizar"
}
/*função de preparação da adição: adiciona os valores nos input's e muda o nome do botão cadastrar para atualizar*/

/*Atualiza os dados*/
function atualizar(id){
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == id) {
            product[i].produto = document.getElementById("inProduto").value
            product[i].preco = document.getElementById("inPreco").value
            window.localStorage.product = JSON.stringify(product)
            btnCadastrar.innerText = "Cadastrar"
        }
        
    }
}
/*Atualiza os dados*/

