import openpyxl

def create_xlsx(data, sheet_name, headers):
    workbook = openpyxl.Workbook()
    sheet = workbook.active
    sheet.title = sheet_name

    sheet.append(headers)

    for entry in data:
        row_data = [entry[key] for key in headers]
        sheet.append(row_data)

    filename = f"{sheet_name.lower()}.xlsx"
    workbook.save(filename)
    print(f"Arquivo {filename} gerado com sucesso!")

# Dados de Clientes
clients = [
    {"Nome": "Cliente 1", "Data de Nascimento": "01/01/1990", "CPF": "123.456.789-01", "Origem": "Loja", "Score": 100},
    {"Nome": "Cliente 2", "Data de Nascimento": "02/02/1985", "CPF": "987.654.321-00", "Origem": "Site", "Score": 80},
    # Adicionar mais clientes aqui...
]
client_headers = ["Nome", "Data de Nascimento", "CPF", "Origem", "Score"]

# Dados de Vendedores
sellers = [
    {"Nome": "Vendedor 1", "Matrícula": "MAT001"},
    {"Nome": "Vendedor 2", "Matrícula": "MAT002"},
    # Adicionar mais vendedores aqui...
]
seller_headers = ["Nome", "Matrícula"]

# Dados de Produtos
products = [
    {"Nome": "Produto 1", "Valor": 50.0, "Categoria": "Eletrônicos"},
    {"Nome": "Produto 2", "Valor": 30.0, "Categoria": "Moda"},
    # Adicionar mais produtos aqui...
]
product_headers = ["Nome", "Valor", "Categoria"]

# Gerar arquivos XLSX
create_xlsx(clients, "Clientes", client_headers)
create_xlsx(sellers, "Vendedores", seller_headers)
create_xlsx(products, "Produtos", product_headers)
