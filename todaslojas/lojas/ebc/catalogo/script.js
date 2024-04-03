document.addEventListener('DOMContentLoaded', function() {
    const produtos = [
        { categoria: 'Cílios', nome: 'Cílios Pórticios Ruby Anjo 5D', descricao: 'Perfeitos para seus olhos.', preco: 'R$ 10,00', imagem: 'imagens/img1.jpg', pagina: 'visu/p1/visup.html' },
        { categoria: 'Cílios', nome: 'Cílios Pórticios Ruby Anjo 5D', descricao: 'Perfeitos para seus olhos.', preco: 'R$ 10,00', imagem: 'imagens/img2.jpg', pagina: 'visu/p2/visup.html' },
        { categoria: 'Cílios', nome: 'Cílios Pórticios Ruby Anjo 5D', descricao: 'Perfeitos para seus olhos.', preco: 'R$ 10,00', imagem: 'imagens/img3.jpg', pagina: 'visu/p3/visup.html' },
        { categoria: 'Cílios', nome: 'Cílios Pórticios Ruby Anjo 5D', descricao: 'Perfeitos para seus olhos.', preco: 'R$ 10,00', imagem: 'imagens/img4.jpg', pagina: 'visu/p4/visup.html' },
        // Adicione mais produtos aqui, não esqueça de incluir a propriedade 'pagina' para cada um
    ];

    const catalogoEl = document.getElementById('catalogo');
    const btnFiltro = document.getElementById('btnFiltro');
    const categoriasEl = document.getElementById('categorias');

    function mostrarProdutos(filtro) {
        catalogoEl.innerHTML = ''; // Limpa o catálogo
        produtos.filter(produto => filtro ? produto.categoria === filtro : true).forEach(produto => {
            const produtoEl = document.createElement('div');
            produtoEl.classList.add('produto');
            produtoEl.innerHTML = `
                <img src="${produto.imagem}" onclick="window.location.href='${produto.pagina}';">
                <div class="nome">${produto.nome}</div>
                <div class="descricao">${produto.descricao}</div>
                <div class="preco">${produto.preco}</div>
            `;
            catalogoEl.appendChild(produtoEl);
        });
    }

    btnFiltro.addEventListener('click', () => categoriasEl.classList.toggle('ativo'));
    categoriasEl.addEventListener('click', (e) => {
        if (e.target !== categoriasEl) {
            mostrarProdutos(e.target.textContent);
        }
    });

    mostrarProdutos(); // Mostra todos os produtos inicialmente
});
