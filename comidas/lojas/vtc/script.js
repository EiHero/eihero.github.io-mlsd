let carrinho = [];

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    alert(`${produto} adicionado ao carrinho!`);
}

document.getElementById('finalizarCompra').addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagemPedido = encodeURIComponent("Olá, gostaria de finalizar meu pedido com os seguintes itens: " + carrinho.join(", ") + ". Aguardo a confirmação e as instruções de pagamento. Obrigado!");
    
    let urlWhatsApp = `https://api.whatsapp.com/send?phone=+5593984111006&text=${mensagemPedido}`;

    // Primeiro mostra a mensagem de alerta
    alert('Pedido finalizado! Aguarde o contato da Lanchonete do VTC.');

    // Depois redireciona o usuário para o WhatsApp
    window.open(urlWhatsApp);

    // Limpa o carrinho após o envio
    carrinho = [];
});
