<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lanchonete do VTC</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Lanchonete do VTC</h1>
    </header>
    <main>
        <div class="product">
            <img src="hamburguer.jpg" alt="Hambúrguer delicioso">
            <h2>Hambúrguer</h2>
            <p>Um hambúrguer suculento com queijo, alface e tomate.</p>
            <button onclick="adicionarAoCarrinho('Hambúrguer')">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="misto.jpg" alt="Sanduíche misto">
            <h2>Sanduíche Misto</h2>
            <p>Pão de forma com presunto, queijo e manteiga.</p>
            <button onclick="adicionarAoCarrinho('Sanduíche Misto')">Adicionar ao Carrinho</button>
        </div>
        <div class="product">
            <img src="refrigerante.jpg" alt="Refrigerante gelado">
            <h2>Refrigerante</h2>
            <p>Escolha entre Coca-Cola, Pepsi ou Guaraná.</p>
            <button onclick="adicionarAoCarrinho('Refrigerante')">Adicionar ao Carrinho</button>
        </div>
    </main>
    <footer>
        <button id="finalizarCompra">Finalizar Compra</button>
    </footer>
    <script src="script.js"></script>
</body>
</html>
