let clients = [];
let sellers = [];
let products = [];

let clientsListVisible = false;
let sellersListVisible = false;
let productsListVisible = false;
let isFormVisible = false; 

function showForm(formType) {
    const formContainer = document.getElementById('form-container');
    const resultContainer = document.getElementById('result');
    
    if (!isFormVisible || formContainer.dataset.formType !== formType) {
        formContainer.style.display = 'block';
        resultContainer.innerHTML = '';
        
        let formHTML = '';
        switch (formType) {
            case 'cliente':
                formHTML = `
                    <h2>Cadastro de Cliente</h2>
                    <input type="text" id="clientName" placeholder="Nome completo"><br>
                    <input type="date" id="clientDate" placeholder="Data de nascimento"><br>
                    <input type="text" id="clientCPF" placeholder="CPF"><br>
                    <select id="clientOrigin">
                        <option value="loja">Loja</option>
                        <option value="site">Site</option>
                    </select><br>
                    <input type="number" id="clientScore" placeholder="Score"><br>
                    <button onclick="addClient()">Cadastrar</button>
                `;
                break;
            case 'vendedor':
                formHTML = `
                    <h2>Cadastro de Vendedor</h2>
                    <input type="text" id="sellerName" placeholder="Nome"><br>
                    <input type="text" id="sellerMatricula" placeholder="Matrícula"><br>
                    <button onclick="addSeller()">Cadastrar</button>
                `;
                break;
            case 'produto':
                formHTML = `
                    <h2>Cadastro de Produto</h2>
                    <input type="text" id="productName" placeholder="Nome"><br>
                    <input type="number" id="productValue" placeholder="Valor"><br>
                    <input type="text" id="productCategory" placeholder="Categoria"><br>
                    <button onclick="addProduct()">Cadastrar</button>
                `;
                break;
        }
        
        formContainer.innerHTML = formHTML;
        formContainer.dataset.formType = formType;
        isFormVisible = true;
    } else {
        formContainer.style.display = 'none';
        formContainer.innerHTML = '';
        formContainer.dataset.formType = '';
        isFormVisible = false;
    }
}

function addClient() {
    const name = document.getElementById('clientName').value;
    const date = document.getElementById('clientDate').value;
    const cpf = document.getElementById('clientCPF').value;
    const origin = document.getElementById('clientOrigin').value;
    const score = parseFloat(document.getElementById('clientScore').value);

    clients.push({
        name: name,
        date: date,
        cpf: cpf,
        origin: origin,
        score: score
    });

    cleanClientContent();

    displayResult('Cliente cadastrado com sucesso!');
}

function cleanClientContent() {
    document.getElementById('clientName').value = '';
    document.getElementById('clientDate').value = '';
    document.getElementById('clientCPF').value = '';
    document.getElementById('clientOrigin').value = 'loja';
    document.getElementById('clientScore').value = '';
}

function removeClient(index) {
    if (index >= 0 && index < clients.length) {
        clients.splice(index, 1);
        displayResult('Cliente removido com sucesso!');
        showClientsList();
    } else {
        displayResult('Índice de cliente inválido.');
    }
}

function showClientsList() {
    const resultContainer = document.getElementById('result');

    if (!clientsListVisible) {
        resultContainer.innerHTML = '';

        if (clients.length === 0) {
            resultContainer.innerHTML = '<p>Nenhum cliente cadastrado ainda.</p>';
        } else {
            let clientsHTML = '<h2>Clientes Cadastrados</h2>';
            clients.forEach((client, index) => {
                clientsHTML += `
                    <div>
                        <span>Nome: ${client.name}</span>
                        <span>Data de Nascimento: ${client.date}</span>
                        <span>CPF: ${client.cpf}</span>
                        <span>Origem: ${client.origin}</span>
                        <span>Score: ${client.score}</span>
                        <button onclick="removeClient(${index})">Remover</button>
                        <button onclick="editClient(${index})">Editar</button>
                    </div>
                `;
            });

            resultContainer.innerHTML = clientsHTML;
        }

        clientsListVisible = true;
    } else {
        resultContainer.innerHTML = '';
        clientsListVisible = false;
    }
}

function editClient(index) {
    const editedName = prompt("Novo nome do cliente:", clients[index].name);
    const editedDate = prompt("Nova data de nascimento do cliente:", clients[index].date);
    const editedCPF = prompt("Novo CPF do cliente:", clients[index].cpf);
    const editedOrigin = prompt("Nova origem do cliente:", clients[index].origin);
    const editedScore = parseFloat(prompt("Novo score do cliente:", clients[index].score));

    if (editedName !== null && editedDate !== null && editedCPF !== null && editedOrigin !== null && !isNaN(editedScore)) {
        clients[index].name = editedName;
        clients[index].date = editedDate;
        clients[index].cpf = editedCPF;
        clients[index].origin = editedOrigin;
        clients[index].score = editedScore;
        displayResult('Cliente editado com sucesso!');
        showClientsList();
    }
}

function addSeller() {
    const name = document.getElementById('sellerName').value;
    const matricula = document.getElementById('sellerMatricula').value;

    sellers.push({
        name: name,
        matricula: matricula
    });

    cleanSellerContent();

    displayResult('Vendedor cadastrado com sucesso!');
    showSellersList();
}

function cleanSellerContent() {
    document.getElementById('sellerName').value = '';
    document.getElementById('sellerMatricula').value = '';
}

function removeSeller(index) {
    if (index >= 0 && index < sellers.length) {
        sellers.splice(index, 1);
        displayResult('Vendedor removido com sucesso!');
        showSellersList();
    } else {
        displayResult('Índice de vendedor inválido.');
    }
}

function showSellersList() {
    const resultContainer = document.getElementById('result');

    if (!sellersListVisible) {
        resultContainer.innerHTML = '';

        if (sellers.length === 0) {
            resultContainer.innerHTML = '<p>Nenhum vendedor cadastrado ainda.</p>';
        } else {
            let sellersHTML = '<h2>Vendedores Cadastrados</h2>';
            sellers.forEach((seller, index) => {
                sellersHTML += `
                <div>
                    <span>Nome: ${seller.name}</span>
                    <span>Matrícula: ${seller.matricula}</span>
                    <button onclick="editSeller(${index})">Editar</button>
                    <button onclick="removeSeller(${index})">Remover</button>
                </div>
                `;
            });

            resultContainer.innerHTML = sellersHTML;
        }

        sellersListVisible = true;
    } else {
        resultContainer.innerHTML = '';
        sellersListVisible = false;
    }
}

function editSeller(index) {
    const editedName = prompt("Novo nome do vendedor:", sellers[index].name);
    const editedMatricula = prompt("Nova matrícula do vendedor:", sellers[index].matricula);

    if (editedName !== null && editedMatricula !== null) {
        sellers[index].name = editedName;
        sellers[index].matricula = editedMatricula;
        displayResult('Vendedor editado com sucesso!');
        showSellersList();
    }
}

function querySellersByMatricula() {
    const matriculaQuery = document.getElementById('matriculaQuery').value;
    const matriculaResultElement = document.getElementById('matriculaResult');
    
    const filteredSellers = sellers.filter(seller => seller.matricula === matriculaQuery);

    matriculaResultElement.innerHTML = '';

    filteredSellers.forEach(seller => {
        const sellerInfo = document.createElement('div');
        sellerInfo.className = 'vendedor-info';
        sellerInfo.innerHTML = `
            <p>Nome: ${seller.name}</p>
            <p>Matrícula: ${seller.matricula}</p>
        `;
        matriculaResultElement.appendChild(sellerInfo);
    });

    document.getElementById('matriculaQuery').value = '';
}

function addProduct() {
    const name = document.getElementById('productName').value;
    const value = parseFloat(document.getElementById('productValue').value);
    const category = document.getElementById('productCategory').value;

    products.push({
        name: name,
        value: value,
        category: category
    });

    cleanProductContent();

    displayResult('Produto cadastrado com sucesso!');
}

function cleanProductContent() {
    document.getElementById('productName').value = '';
    document.getElementById('productValue').value = '';
    document.getElementById('productCategory').value = '';

}

function removeProduct(index) {
    if (index >= 0 && index < products.length) {
        products.splice(index, 1);
        displayResult('Produto removido com sucesso!');
        showProductsList();
    } else {
        displayResult('Índice de produto inválido.');
    }
}

function showProductsList() {
    const resultContainer = document.getElementById('result');

    if (!productsListVisible) {
        resultContainer.innerHTML = '';

        if (products.length === 0) {
            resultContainer.innerHTML = '<p>Nenhum produto cadastrado ainda.</p>';
        } else {
            let productsHTML = '<h2>Produtos Cadastrados</h2>';
            products.forEach((product, index) => {
                productsHTML += `
                    <div>
                        <span>Nome: ${product.name}</span>
                        <span>Valor: ${product.value}</span>
                        <span>Categoria: ${product.category}</span>
                        <button onclick="removeProduct(${index})">Remover</button>
                        <button onclick="editProduct(${index})">Editar</button>
                    </div>
                `;
            });

            resultContainer.innerHTML = productsHTML;
        }

        productsListVisible = true;
    } else {
        resultContainer.innerHTML = '';
        productsListVisible = false;
    }
}

function editProduct(index) {
    const editedName = prompt("Novo nome do produto:", products[index].name);
    const editedValue = parseFloat(prompt("Novo valor do produto:", products[index].value));
    const editedCategory = prompt("Nova categoria do produto:", products[index].category);

    if (editedName !== null && !isNaN(editedValue) && editedCategory !== null) {
        products[index].name = editedName;
        products[index].value = editedValue;
        products[index].category = editedCategory;
        displayResult('Produto editado com sucesso!');
        showProductsList();
    }
}

function queryProducts() {
    const categoryQuery = document.getElementById('categoryQuery').value.toLowerCase();
    const filteredProducts = products.filter(product => product.category.toLowerCase().includes(categoryQuery));

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    if (filteredProducts.length === 0) {
        displayResult('Nenhum produto encontrado na categoria.');
    } else {
        resultContainer.innerHTML = '<h2>Produtos encontrados na categoria:</h2>';

        filteredProducts.forEach(product => {
            resultContainer.innerHTML += `
                <div>
                    <span>Nome: ${product.name}</span>
                    <span>Valor: ${product.value}</span>
                    <span>Categoria: ${product.category}</span>
                </div>
            `;
        });
    }

    document.getElementById('categoryQuery').value = '';
}

function displayResult(message) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<p>${message}</p>`;
}