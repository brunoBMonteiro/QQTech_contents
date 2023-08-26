numero = int(input('Digite um número: '))

def calcular_tabuada(numero):
    print(f'Tabuada do número: {numero}')
    for i in range(0, 11):
        resultado = numero * i
        print(f'{numero} x {i} = {resultado}')

calcular_tabuada(numero)