document.addEventListener('DOMContentLoaded', function() {
    const produtos = [
        { categoria: 'Cílios', nome: 'Cílios Pórticios Ruby Anjo 5D', descricao: 'Perfeitos para seus olhos.', preco: 'R$ 10,00', imagem: 'imagens/img1.jpg' },
		{ categoria: 'Cílios', nome: 'Cílios Pórticios Ruby Anjo 5D', descricao: 'Perfeitos para seus olhos.', preco: 'R$ 10,00', imagem: 'imagens/img2.jpg' },
		{ categoria: 'Cílios', nome: 'Cílios Pórticios Ruby Anjo 5D', descricao: 'Perfeitos para seus olhos.', preco: 'R$ 10,00', imagem: 'imagens/img3.jpg' },
		{ categoria: 'Cílios', nome: 'Cílios Pórticios Ruby Anjo 5D', descricao: 'Perfeitos para seus olhos.', preco: 'R$ 10,00', imagem: 'imagens/img4.jpg' },
		{categoria: 'Mascaras', nome: 'Máscara de cílios vivai', descricao: 'Máscara de cílios vivai  mega volume.', preco: 'R$ 10,00', imagem: 'imagens/mascara1.jpg' },
		{categoria: 'Sabonetes', nome: 'Sabonete', descricao: 'Sabonete líquido hidrabene.', preco: 'R$ 45,00', imagem: 'imagens/sabonete1.jpg' },
		{categoria: 'Sabonetes', nome: 'Sabonete', descricao: 'Sabonete líquido hidrabene.', preco: 'R$ 45,00', imagem: 'imagens/sabonete2.jpg' },
		{ categoria: 'Gloss', nome: 'Gloss laqueado ruby rose linha Glass', descricao: 'Perfeitos para seus labios.', preco: 'R$ 10,00', imagem: 'imagens/gloss1.jpg' },
		{ categoria: 'Gloss', nome: 'Gloss laqueado ruby rose linha Glass', descricao: 'Perfeitos para seus labios.', preco: 'R$ 10,00', imagem: 'imagens/gloss2.jpg' },
		{ categoria: 'Batons', nome: 'Batom Duo Ruby Rose', descricao: 'Perfeitos para seus labios.', preco: 'R$ 24,99', imagem: 'imagens/batom1.jpg' },
		{categoria: 'Gels', nome: 'Gel de sobrancelhas Melu', descricao: 'O melhor gel.', preco: 'R$ 18,00', imagem: 'imagens/gel1.jpg' },
		{ categoria: 'Bases', nome: 'Base Balla', descricao: 'acabamento matte alta cobertura.', preco: 'R$ 50,00', imagem: 'imagens/base1.jpg' },
		{ categoria: 'Esponjas', nome: 'Esponja Flat Mirror', descricao: 'Esponja Flat Mirror Linha Glass Ruby Rose.', preco: 'R$ 20,00', imagem: 'imagens/esponja1.jpg' },
		{ categoria: 'Esponjas', nome: 'Esponja Flat Mirror', descricao: 'Esponja Flat Mirror Linha Glass Ruby Rose.', preco: 'R$ 20,00', imagem: 'imagens/esponja2.jpg' },
	    { categoria: 'Xampus', nome: 'Xampu Anti-Resíduos', descricao: 'Limpeza profunda e refrescante.', preco: 'R$ 19,90', imagem: 'imagens/img2.jpg' },
		{ categoria: 'Xampus', nome: 'Xampu Anti-Resíduos', descricao: 'Limpeza profunda e refrescante.', preco: 'R$ 19,90', imagem: 'imagens/img3.jpg' },
		{ categoria: 'Xampus', nome: 'Xampu Anti-Resíduos', descricao: 'Limpeza profunda e refrescante.', preco: 'R$ 19,90', imagem: 'imagens/img4.jpg' },
        { categoria: 'Cremes hidratantes', nome: 'Creme Nutritivo', descricao: 'Hidratação intensa para pele seca.', preco: 'R$ 29,90', imagem: 'imagens/img2.jpg' },
        // Adicione mais produtos aqui
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
                <img src="${produto.imagem}" onclick="window.location.href='visu/p1/visup.html';">
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

