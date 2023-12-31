# Loops
# Em python existem 2 tipos de loop, o for e o while,
# A identaçao é feita pelo tab

for x in range(3):
    print(x)
    print('Olá')

for x in range(3):
    print(x)
print('Olá')

for x in [1,2,3,4,5,6,7,8,9,10]:
    numero_par = x*2
    print(numero_par )

print('==================')

y=10
while y<10:
    numero_par2 = y*2
    print(numero_par2 )
    y = y+1

# Loops
my_dict = {'nome':'João', 'idade':26}
for key in my_dict:
    print(key)

my_dict = {'nome':'João', 'idade':26}
for key, value in my_dict.items():
    print(f'{key}: {value }')

# Comprehension

# Forma 1 Listas
my_list = []
for i in range(10):
    my_list.append(i)
# Forma 2
my_list = [i for i in range(10)]

# Forma 1 Dicionários
my_dict = {}
for i in range(10):
    my_dict[str(i)]=i

# Forma 2
my_dict = {str(i):i for i in range(10)}


# Funções
"""
#definir função
def nome_funcao(param):
codigo
#chamar função
nome_funcao(param)
"""

def bom_dia(nome):
    print(f'Bom dia, {nome}!')

bom_dia('Bruno')

#definir função
def bom_dia(nome1, nome2):
    print(f'Bom dia, {nome1} e {nome2}!')

#chamar função
bom_dia('João', 'Maria')

bom_dia('Maria', 'João')

def soma(num1, num2):
    resultado_soma = num1 + num2
    return resultado_soma

def bom_dia(nome):
    return f'Bom dia, {nome}!'

