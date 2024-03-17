document.addEventListener("DOMContentLoaded", function() {
    const produtosDiv = document.getElementById('produtos');
    
    // Lista de produtos e seus estados
    const produtos = [
        { nome: 'Produto1', pasta: 'produto1' },
        { nome: 'Produto2', pasta: 'produto2' },
        { nome: 'Produto3', pasta: 'produto3' }
        // Adicione mais produtos conforme necessário
    ];

    // Função para verificar o status de cada produto
    function verificarStatus() {
        produtos.forEach(produto => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    const status = (xhr.status === 200) ? 'Disponível' : 'Indisponível';
                    const produtoDiv = document.createElement('div');
                    produtoDiv.innerHTML = `<h3>${produto.nome}</h3><p>${status}</p>`;
                    produtosDiv.appendChild(produtoDiv);
                }
            };
            xhr.open('GET', `/${produto.pasta}/ativo.txt`, true);
            xhr.send();
        });
    }

    // Chama a função para verificar o status dos produtos
    verificarStatus();
});
