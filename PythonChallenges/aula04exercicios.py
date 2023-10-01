import pandas as pd

# Exercicio 01
# 1) Crie um dataframe conforme a seguinte tabela:

data = {
    'produto': ['cadeira', 'mesa', 'torneira', 'cama', 'abajur', 'porta'],
    'preco': [50, 200, 15, 800, 90, 450]
    }
df = pd.DataFrame(data)

# Criando logs para ver resultados
print("Exercício 1 - DataFrame de Produtos e Preços:")
print(df)
print("\n")

# Exercicio 02
# 2) Com o dataframe criado, ordene-o em ordem decrescente de preço.
df = df.sort_values(by='preco', ascending=False)

print("Exercício 2 - DataFrame Ordenado por Preço Decrescente:")
print(df)
print("\n")

# Exercicio 03
# Exercício 3: Adicionando o produto "tapete" com preço 250 ao DataFrame
novo_produto = pd.DataFrame({'produto': ['tapete'], 'preco': [250]})
df = pd.concat([df, novo_produto], ignore_index=True)

print("Exercício 3 - DataFrame com Produto 'Tapete' Adicionado:")
print(df)
print("\n")

# Exercicio 04
# Exercício 4: Filtrando o DataFrame para mostrar produtos com preço menor que 100
df_filtrado = df[df['preco'] < 100]

print("Exercício 4 - Preços < 100:")
print(df_filtrado)
print("\n")

#Exercicio 05
# Exercício 5: Salvando o DataFrame original em um arquivo CSV
df.to_csv('produtos.csv', index=False)

print("Exercício 5 - Salvo em 'produtos.csv'")
print("\n")

# Exercicio 06
# Exercício 6: Lendo o DataFrame do arquivo CSV e atualizando a coluna "vendas" com a quantidade vendida
df_ler = pd.read_csv('produtos.csv')

# Exercicio 07
# Exercício 7: Criando um DataFrame de vendas com produtos e quantidades vendidas
data_vendas = {'produto': ['cadeira', 'mesa', 'torneira', 'cama', 'abajur', 'porta'],
               'qtd_vendida': [5, 12, 65, 51, 12, 9]}
df_vendas = pd.DataFrame(data_vendas)

# Atualizando a coluna "vendas" com a quantidade vendida do Exercício 7
df_ler['vendas'] = df_ler['produto'].apply(lambda x: df_vendas[df_vendas['produto'] == x]['qtd_vendida'].values[0] if x in df_vendas['produto'].tolist() else 0)

print("Exercício 7 - DataFrame Lido de 'produtos.csv' com Coluna 'Vendas' Atualizada:")
print(df_ler)
print("\n")

# Exercício 08
# Exercício 8: Combinando os DataFrames de produtos e vendas e calculando a receita total e a porcentagem de receita
merged_df = pd.merge(df_ler, df_vendas, on='produto')
merged_df['receita_total'] = merged_df['preco'] * merged_df['qtd_vendida']
receita_total = merged_df['receita_total'].sum()
merged_df['porcentagem_receita'] = ((merged_df['receita_total'] / receita_total) * 100).round(2)

print("Exercício 8 - DataFrame Combinado com Receita Total e Porcentagem de Receita:")
print(merged_df)

# A tarefa 5 não foi enviada devido a falta de definição até o momento