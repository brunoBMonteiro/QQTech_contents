# formas de comentário python
# comentário de uma linha
"""
comentário de 
várias linhas
"""

# inteiros
print('Hello world')
a = 1
type(a)
print(a)

# Booleano
b = True
print(b)

# float
c = 2.45
print(c)

#str Respresenta strings de texto
d = "Teste de texto"
print(d)

# variáveis

# Formatação de string
name = "Bruno"
string_formatada = f"Bom dia, {name}!"
print(string_formatada)

# concatenação se string
saudacao = "Olá "
nome = "Bruno"
nova_string = saudacao + nome
print(nova_string)

# Multiplicação de string
string_base2 = "Teste "
nova_string2 = string_base2*2
print(nova_string2)

# Substituição
string_base3 = "Olá Maria"
nova_string3 = string_base3.replace("Maria", "Ana")
print(nova_string3)

# Listas

# Criar lista
my_list2 = []
my_list = [1,2,3]
names = ['Bruno', 'Maria', 'pedro', 'Ana']
print(my_list)
print(names)

# Remover elementos
my_list.remove(1)
print(my_list)

names.remove('Maria')
print(names)

# Adiciona elementos
names.append('Ana')
print(names)

# ver numero de elementos da lista
print(len(names))

# acessar elementos individuais pelo indice, obs se usar -1 acessamos 
# o fim da lista -2 e assim por diante
my_list3 = [1,2,3,4]
print(my_list3[0])

# Tuples semelhantes a lista mas são imutáveis
my_tuple = (1,2,3)

# Acessar elementos individuais
print(my_tuple[0])

# Dicionários: são elementos que possuem chave e valor
my_dict = {'nome': 'Bruno', 'idade': 25}
print(my_dict['nome'])

# Adicionando
my_dict['cidade'] = 'Porto Alegre'
# modificando
my_dict['idade'] = 27
print(my_dict)
