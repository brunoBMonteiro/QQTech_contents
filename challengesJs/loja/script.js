let clients = [];
let sellers = [];
let products = [];


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
                <input type="date" id="clientDob" placeholder="Data de nascimento"><br>
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
    const dob = document.getElementById('clientDob').value;
    const cpf = document.getElementById('clientCPF').value;
    const origin = document.getElementById('clientOrigin').value;
    const score = parseFloat(document.getElementById('clientScore').value);

    clients.push({
        name: name,
        dob: dob,
        cpf: cpf,
        origin: origin,
        score: score
    });

    displayResult('Cliente cadastrado com sucesso!');
    console.log(clients);
}

function addSeller() {
    const name = document.getElementById('sellerName').value;
    const matricula = document.getElementById('sellerMatricula').value;

    sellers.push({
        name: name,
        matricula: matricula
    });

    displayResult('Vendedor cadastrado com sucesso!');
    console.log(sellers);
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

    displayResult('Produto cadastrado com sucesso!');
    console.log(products);

}

function displayResult(message) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<p>${message}</p>`;
}
