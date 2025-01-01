let carrinho = [];

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoButton = document.getElementById("quantidadeCarrinho");
    carrinhoButton.textContent = carrinho.length;

    const listaCarrinho = document.getElementById("listaCarrinho");
    listaCarrinho.innerHTML = "";

    carrinho.forEach((produto, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${produto} <button onclick="removerDoCarrinho(${index})">Remover</button>`;
        listaCarrinho.appendChild(li);
    });
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function finalizarCompra() {
    const itensCarrinho = carrinho.join(", ");
    const whatsappLink = `https://wa.me/5593984111006?text=Eu%20gostaria%20de%20finalizar%20a%20compra%20dos%20seguintes%20itens:%20${itensCarrinho}`;
    window.open(whatsappLink, "_blank");
}

document.getElementById("carrinhoButton").addEventListener("click", function () {
    document.getElementById("carrinhoModal").style.display = "flex";
});

document.getElementById("fecharCarrinho").addEventListener("click", function () {
    document.getElementById("carrinhoModal").style.display = "none";
});
