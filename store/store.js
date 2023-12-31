let clients = [];
let sellers = [];
let products = [];

let clientsListVisible = false;
let sellersListVisible = false;
let productsListVisible = false;


function showForm(formType) {
    const formContainer = document.getElementById('form-container');
    const resultContainer = document.getElementById('result');
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
    showClientsList();

    populateClientsTable(clients);
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
                    </div>
                `;
            });

            clientsHTML += '<button onclick="generateXLSX()">Gerar XLSX</button>';

            resultContainer.innerHTML = clientsHTML;
        }

        clientsListVisible = true;
    } else {
        resultContainer.innerHTML = '';
        clientsListVisible = false;
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
    const sellersTableContainer = document.getElementById('sellers-table-container');
    const sellersTable = document.getElementById('sellers-table');
    const tbody = sellersTable.querySelector('tbody');

    if (!sellersListVisible) {
        sellersTableContainer.style.display = 'block';
        tbody.innerHTML = '';

        if (sellers.length === 0) {
            const emptyRow = document.createElement('tr');
            emptyRow.innerHTML = '<td colspan="3">Nenhum vendedor cadastrado ainda.</td>';
            tbody.appendChild(emptyRow);
        } else {
            sellers.forEach((seller, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${seller.name}</td>
                    <td>${seller.matricula}</td>
                    <td>
                        <button onclick="editSeller(${index})">Editar</button>
                        <button onclick="removeSeller(${index})">Remover</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        sellersListVisible = true;
    } else {
        sellersTableContainer.style.display = 'none';
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
    showProductsList();
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
    const productsTableContainer = document.getElementById('products-table-container');
    const productsTable = document.getElementById('products-table');
    const tbody = productsTable.querySelector('tbody');

    if (!productsListVisible) {
        productsTableContainer.style.display = 'block';
        tbody.innerHTML = '';

        if (products.length === 0) {
            const emptyRow = document.createElement('tr');
            emptyRow.innerHTML = '<td colspan="4">Nenhum produto cadastrado ainda.</td>';
            tbody.appendChild(emptyRow);
        } else {
            products.forEach((product, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product.name}</td>
                    <td>${product.value}</td>
                    <td>${product.category}</td>
                    <td>
                        <button onclick="removeProduct(${index})">Remover</button>
                        <button onclick="editProduct(${index})">Editar</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        productsListVisible = true;
    } else {
        productsTableContainer.style.display = 'none';
        productsListVisible = false;
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

function generateXLSX() {
    const data = {
        clients: clients,
        sellers: sellers,
        products: products
    };

    fetch('http://127.0.0.1:5000/generate_xlsx', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
        if (responseData.message === "XLSX file generated successfully") {
            // File generated successfully, you can proceed with downloading or other actions
            console.log(responseData.file_path); // Just to check the file path

            // Call the download function or update the UI as needed
        } else {
            console.error('Error:', responseData.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function downloadXLSX(dataType) {
    fetch(`/download_file/${dataType}_Data.xlsx`, {
        method: 'GET'
    })
    .then(response => {
        if (response.ok) {
            return response.blob();
        }
        throw new Error('Network response was not ok.');
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `${dataType}_Data.xlsx`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function populateClientsTable(clientsData) {
    const tbody = document.querySelector('#clients-table tbody');
    tbody.innerHTML = '';

    clientsData.forEach(client => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.name}</td>
            <td>${client.date}</td>
            <td>${client.cpf}</td>
            <td>${client.origin}</td>
            <td>${client.score}</td>
            <td><button onclick="removeClient(${clients.indexOf(client)})">Remover</button></td>
        `;
        tbody.appendChild(row);
    });
}

function populateSellersTable(sellersData) {
    const tbody = document.querySelector('#sellers-table tbody');
    tbody.innerHTML = '';

    sellersData.forEach(seller => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${seller.name}</td>
            <td>${seller.matricula}</td>
            <td><button onclick="editSeller(${sellers.indexOf(seller)})">Editar</button>
                <button onclick="removeSeller(${sellers.indexOf(seller)})">Remover</button></td>
        `;
        tbody.appendChild(row);
    });
}

function populateProductsTable(productsData) {
    const tbody = document.querySelector('#products-table tbody');
    tbody.innerHTML = '';

    productsData.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.value}</td>
            <td>${product.category}</td>
            <td><button onclick="removeProduct(${products.indexOf(product)})">Remover</button></td>
        `;
        tbody.appendChild(row);
    });
}

function displayResult(message) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<p>${message}</p>`;
}