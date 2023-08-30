const produtos = [];

const cadastrarProduto = () => {
    const nome = document.getElementById("nome").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const categoria = document.getElementById("categoria").value;

    const produto = { nome, valor, categoria };
    produtos.push(produto);

    exibirMensagem("Produto cadastrado com sucesso.");
    limparCampos();
};

const consultarPorCategoria = () => {
    const categoriaConsulta = document.getElementById("categoriaConsulta").value;
    const produtosPorCategoria = produtos.filter(produto => produto.categoria === categoriaConsulta);

    if (produtosPorCategoria.length === 0) {
        exibirMensagem("Nenhum produto encontrado para essa categoria.");
    } else {
        const resultadoDiv = document.getElementById("resultadoConsulta");
        resultadoDiv.innerHTML = "<h3>Produtos da Categoria:</h3>";

        const ul = document.createElement("ul");
        produtosPorCategoria.forEach(produto => {
            const li = document.createElement("li");
            li.textContent = `${produto.nome} - R$ ${produto.valor.toFixed(2)}`;
            ul.appendChild(li);
        });

        resultadoDiv.appendChild(ul);
    }
};

const exibirMensagem = mensagem => {
    const mensagemDiv = document.createElement("div");
    mensagemDiv.textContent = mensagem;
    document.body.appendChild(mensagemDiv);
    setTimeout(() => {
        document.body.removeChild(mensagemDiv);
    }, 3000);
};

const limparCampos = () => {
    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("categoria").value = "";
};

document.getElementById("cadastrarProduto").addEventListener("click", cadastrarProduto);
document.getElementById("consultarPorCategoria").addEventListener("click", consultarPorCategoria);

document.getElementById("exportarExcel").addEventListener("click", function () {
    const produtosQueryString = JSON.stringify(produtos); // pega o que está no array produtos e converte para JSON
    const blob = new Blob([produtosQueryString], { type: 'application/json' }); // Cria um projeto Blob, que é um objeto que gera dados binários para manipulá-los posteriormente.
    const downloadLink = URL.createObjectURL(blob);// cria um elemento link a partir do blob gerado
    
    const link = document.createElement("a"); // cria um elemento link
    link.href = downloadLink; 
    link.download = "produtos.json";
    link.click(); // cria o link para gerar o download na pasta padrão do navegador.
});

